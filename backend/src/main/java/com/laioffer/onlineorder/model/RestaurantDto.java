package com.laioffer.onlineorder.model;
public record RestaurantDto(Long id, String name, String address, String phone, String imageUrl, java.util.List<MenuItemDto> menuItems) {}
