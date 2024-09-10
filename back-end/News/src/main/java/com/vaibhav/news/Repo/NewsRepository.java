package com.vaibhav.news.Repo;

import com.vaibhav.news.Entity.News;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NewsRepository extends MongoRepository<News, ObjectId> {
    List<News> findByCategory(String category);

}
