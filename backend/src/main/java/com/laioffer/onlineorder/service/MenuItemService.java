package com.laioffer.onlineorder.service;
import com.laioffer.onlineorder.model.MenuItemDto;
import java.util.List;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;

@Service
public class MenuItemService {
    private final RestaurantService restaurants;
    public MenuItemService(RestaurantService restaurants) { this.restaurants = restaurants; }
    public List<MenuItemDto> getMenuItemsByRestaurantId(long id) {
        return restaurants.getRestaurants().stream().filter(r -> r.id() == id)
            .findFirst().orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Restaurant not found"))
            .menuItems();
    }
}
