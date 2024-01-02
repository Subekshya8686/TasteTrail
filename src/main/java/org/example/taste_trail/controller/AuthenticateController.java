package org.example.taste_trail.controller;

import com.online.test_trail.dto.request.AuthenticateRequest;
import com.online.test_trail.helper.ApiResponse;
import com.online.test_trail.service.AuthenticateService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping
@RequiredArgsConstructor
public class AuthenticateController {
    private final ApiResponse apiResponse;
    private final AuthenticateService authenticateService;

    @PostMapping("/authenticate")
    public ResponseEntity<Map<String, Object>> authenticate(@RequestBody AuthenticateRequest authenticateRequest) {

        return apiResponse.successResponse(
                "Token generated successfully.",
                true, null,
                authenticateService.authenticate(authenticateRequest));
    }

}
