package com.vaibhav.news.Service;

import com.vaibhav.news.Entity.User;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {
    boolean saveUser(User user);

    boolean saveExistUser(User user);

    List<User> getAll();

    User getByUsername(String username);

    boolean deleteByUserName(String userName);

    User findByUsername(String username);

    boolean updateUser(User user, String username);
}
