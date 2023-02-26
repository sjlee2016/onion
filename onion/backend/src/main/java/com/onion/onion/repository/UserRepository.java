package com.onion.onion.repository;

import com.onion.onion.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository <User, Long> {
    User findByEmail(@Param("email") String email);
    @Query("delete from User u where u.email=:email")
    void deleteByEmail(@Param("email") String email);
}
