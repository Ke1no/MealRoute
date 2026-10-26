package com.laioffer.onlineorder.model;
public record CartDto(Long id, Double totalPrice, java.util.List<OrderItemDto> orderItems) {}
