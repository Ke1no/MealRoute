package com.laioffer.onlineorder.service;
import com.laioffer.onlineorder.model.*;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class RestaurantService {
    private final List<RestaurantDto> restaurants = List.of(
        new RestaurantDto(1L, "Campus Kitchen", "Demo location", "", "", List.of(
            new MenuItemDto(101L, "Garden bowl", "Synthetic demo item", 12.5, ""),
            new MenuItemDto(102L, "Margherita pizza", "Synthetic demo item", 15.0, ""))),
        new RestaurantDto(2L, "Noodle House", "Demo location", "", "", List.of(
            new MenuItemDto(201L, "Mushroom noodles", "Synthetic demo item", 13.0, ""))));

    public List<RestaurantDto> getRestaurants() { return restaurants; }
}
