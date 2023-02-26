package com.onion.onion.service;

import com.onion.onion.entity.User;

import java.util.List;

public interface IUserService {
    // Save operation
    User saveUser(User user);

    // Read operation
    List<User> fetchUserList();

    // Update operation
    public boolean updateUserPassword(String email, String password);
    // Delete operation
    boolean deleteUserByEmail(String email);
}
