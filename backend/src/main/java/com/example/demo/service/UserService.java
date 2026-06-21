package com.example.demo.service;

import com.example.demo.dto.RegisterRequest;
import com.example.demo.entity.*;
import com.example.demo.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class UserService {

    @Autowired private UserRepository userRepository;
    @Autowired private ClientProfileRepository clientProfileRepository;
    @Autowired private ExpertProfileRepository expertProfileRepository;
    @Autowired private BCryptPasswordEncoder passwordEncoder;

    /**
     * Dùng cho việc đăng nhập: Trả về User nếu thông tin đúng
     */
    public Optional<User> authenticate(String username, String password) {
        return userRepository.findByUsername(username)
                .filter(user -> passwordEncoder.matches(password, user.getPassword()));
    }

    @Transactional
    public String registerUser(RegisterRequest request) {
        if (request.getPassword() == null || !request.getPassword().equals(request.getConfirmPassword())) {
            return "Passwords do not match!";
        }

        if (userRepository.findByUsername(request.getUsername()).isPresent()) {
            return "Account already exists!";
        }

        String hashedPassword = passwordEncoder.encode(request.getPassword());
        
        // Tạo User mới
        User newUser = new User();
        newUser.setUsername(request.getUsername());
        newUser.setPassword(hashedPassword);
        newUser.setRole(request.getRole().toUpperCase());
        User savedUser = userRepository.save(newUser);

        // Lưu profile tương ứng
        if ("CLIENT".equals(savedUser.getRole())) {
            ClientProfile client = new ClientProfile();
            client.setCompanyName(request.getCompanyName());
            client.setIndustry(request.getIndustry());
            client.setCompanySize(request.getCompanySize());
            client.setDescription(request.getDescription());
            client.setUser(savedUser);
            clientProfileRepository.save(client);
        } 
        else if ("EXPERT".equals(savedUser.getRole())) {
            ExpertProfile expert = new ExpertProfile();
            expert.setSkill(request.getSkill());
            expert.setExperience(request.getExperience());
            expert.setCertificate(request.getCertificate());
            expert.setHourlyRate(request.getHourlyRate());
            expert.setUser(savedUser);
            expertProfileRepository.save(expert);
        }

        return "Registration Success!";
    }
}