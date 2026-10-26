package com.laioffer.onlineorder;

import jakarta.servlet.DispatcherType;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class AppConfig {
    // No demo credentials. Replace with course JDBC UserDetailsService during Lesson 14.
    @Bean UserDetailsService users() { return new InMemoryUserDetailsManager(); }

    @Bean SecurityFilterChain security(HttpSecurity http) throws Exception {
        http.authorizeHttpRequests(auth -> auth
            .dispatcherTypeMatchers(DispatcherType.ERROR).permitAll()
            .requestMatchers(HttpMethod.GET, "/health", "/restaurants/menu", "/restaurant/*/menu").permitAll()
            .anyRequest().authenticated());
        http.exceptionHandling(errors -> errors.authenticationEntryPoint((req, res, ex) -> {
            res.setStatus(401);
            res.setContentType("application/json");
            res.getWriter().write("{\"error\":\"Authentication is not implemented in this scaffold\"}");
        }));
        return http.build(); // Keep default CSRF protection; login integration is pending.
    }
}
