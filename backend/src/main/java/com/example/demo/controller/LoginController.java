package com.example.demo.controller;

import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.JwtService;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class LoginController {

    @Autowired
    private UserService userService;

    @Autowired
    private JwtService jwtService; // Sử dụng Service chuẩn đã tạo

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> loginData) {
        String username = loginData.get("username");
        String password = loginData.get("password");

        // 1. Xác thực thông tin người dùng
        Optional<User> userOpt = userService.authenticate(username, password);

        if (userOpt.isPresent()) {
            User user = userOpt.get();
            
            // 2. Tạo token bằng JwtService thay vì JwtTokenProvider cũ
            String token = jwtService.generateToken(user);
            
            return ResponseEntity.ok(Map.of(
                "status", "success",
                "message", "Login Successful",
                "token", token
            ));
        } else {
            // 3. Trả về 401 Unauthorized nếu sai thông tin
            return ResponseEntity.status(401).body(Map.of(
                "status", "error", 
                "message", "Invalid username or password"
            ));
        }
    }
}