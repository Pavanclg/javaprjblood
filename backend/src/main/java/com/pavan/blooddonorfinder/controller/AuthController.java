package com.pavan.blooddonorfinder.controller;

import com.pavan.blooddonorfinder.entity.User;
import com.pavan.blooddonorfinder.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public User register(@RequestBody User user) {
        return userService.register(user);
    }

    @PostMapping("/login")
    public String login(@RequestBody User user) {

        boolean success =
                userService.login(user.getEmail(), user.getPassword());

        if (success) {
            return "Login Successful";
        }

        return "Invalid Email or Password";
    }
}