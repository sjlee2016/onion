package com.onion.onion.service;

import com.onion.onion.entity.User;
import com.onion.onion.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class UserService implements IUserService{
    @Autowired
    private UserRepository userRepository;
    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public List<User> fetchUserList() {
        return  (List<User>)userRepository.findAll();
    }

    @Override
    public boolean updateUserPassword(String email, String password) {
        User userDB = userRepository.findByEmail(email);
        if(userDB != null && userDB.getPassword().equals(password)){
            return true;
        }
        return false;

    }

    @Override
    public boolean deleteUserByEmail(String email) {
        userRepository.deleteByEmail(email);
        if(userRepository.findByEmail(email) == null){
            return true;
        }
        return false;
    }
}
