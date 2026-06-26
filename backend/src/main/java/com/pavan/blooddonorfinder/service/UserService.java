package com.pavan.blooddonorfinder.service;

import com.pavan.blooddonorfinder.entity.User;
import com.pavan.blooddonorfinder.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User register(User user) {
        return userRepository.save(user);
    }

    public boolean login(String email, String password) {

        Optional<User> user = userRepository.findByEmail(email);

        if (user.isPresent()) {
            return user.get().getPassword().equals(password);
        }

        return false;
    }
}