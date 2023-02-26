package com.onion.onion.controller;

import com.onion.onion.entity.User;
import com.onion.onion.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
public class UserController {
    // Annotation
    @Autowired
    private UserService userService;

    // Save operation
    @PostMapping("/users")
    public User saveUser(
            @Valid @RequestBody User user)
    {
        return userService.saveUser(user);
    }

    // Read operation
    @GetMapping("/users")
    public List<User> fetchUserList()
    {
        return userService.fetchUserList();
    }

    // Update operation
    @PutMapping("/users/{email}/{password}")
    public boolean
    updateUserPassword( @PathVariable("email") String email,
                     @PathVariable("password") String password)
    {
        return userService.updateUserPassword(email,password);
    }

    // Delete operation
    @DeleteMapping("/users/{email}")
    public boolean deleteUserById(@PathVariable("email")
                                       String email)
    {
        return userService.deleteUserByEmail(email);
    }
}
