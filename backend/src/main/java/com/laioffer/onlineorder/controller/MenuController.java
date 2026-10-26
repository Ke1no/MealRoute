package com.laioffer.onlineorder.controller;
import com.laioffer.onlineorder.model.*;
import com.laioffer.onlineorder.service.*;
import java.util.List;
import org.springframework.web.bind.annotation.*;

@RestController
public class MenuController {
    private final RestaurantService restaurants;
    private final MenuItemService menus;
    public MenuController(RestaurantService restaurants, MenuItemService menus) {
        this.restaurants = restaurants; this.menus = menus;
    }
    @GetMapping("/restaurants/menu")
    public List<RestaurantDto> getMenuForAllRestaurants() { return restaurants.getRestaurants(); }
    @GetMapping("/restaurant/{restaurantId}/menu")
    public List<MenuItemDto> getMenuByRestaurant(@PathVariable("restaurantId") long id) {
        return menus.getMenuItemsByRestaurantId(id);
    }
}
