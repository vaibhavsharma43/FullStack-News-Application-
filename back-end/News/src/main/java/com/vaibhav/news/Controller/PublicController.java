package com.vaibhav.news.Controller;

import com.vaibhav.news.Entity.News;
import com.vaibhav.news.Entity.User;
import com.vaibhav.news.Service.NewsService;
import com.vaibhav.news.Service.UserService;
import com.vaibhav.news.ServiceImp.UserDetailsServiceImp;
import com.vaibhav.news.utilis.JwtUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("public")
@Slf4j
public class PublicController {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private UserDetailsServiceImp userDetailsServiceImp;
    @Autowired
    private NewsService newsService;
    @Autowired
    private UserService userService;
    @Autowired
    private JwtUtil jwtUtil;


    @GetMapping("/news/api/allNews")
    public List<News> getAllNews() {

        try{


            return newsService.getAllNews();
        }catch (Exception e){
            throw e;
        }

    }

    @GetMapping("/news/api/{category}")
    public ResponseEntity<List<News>> getNewsByCategory(@PathVariable("category") String category) {
        try {
            List<News> newsList = newsService.getNewsByCategory(category);
            if (newsList.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(newsList, HttpStatus.OK);
        } catch (Exception e) {
            log.error("Error fetching news by category", e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/signup")
    public ResponseEntity<?> signUp(@RequestBody User user) {
        try {

            user.getRoles().add("USER");
            user.getRoles().add("ADMIN");

            boolean isUserCreated = userService.saveUser(user);
            if (isUserCreated) {
                log.info(user.getUserName());
                return ResponseEntity.status(HttpStatus.CREATED).body("User creation successful");
            } else {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User creation failed");
            }
        } catch (Exception e) {

            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while creating the user");
        }
    }
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        try{
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(user.getUserName(),user.getPassword()));
            UserDetails userDetails= userDetailsServiceImp.loadUserByUsername(user.getUserName());
            String jwt =jwtUtil.generateToken(userDetails.getUsername());
            return new ResponseEntity<>(jwt, HttpStatus.OK);
        }catch (Exception e){
            log.error("Exception occurred while createAuthenticationToken ", e);
            return new ResponseEntity<>("Incorrect username or password", HttpStatus.BAD_REQUEST);
        }

    }

}


