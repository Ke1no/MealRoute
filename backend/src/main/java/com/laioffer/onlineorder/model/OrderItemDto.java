package com.laioffer.onlineorder.model;
public record OrderItemDto(Long orderItemId, Long menuItemId, Long restaurantId, Double price, Integer quantity, String menuItemName, String menuItemDescription, String menuItemImageUrl) {}
