package com.laioffer.onlineorder;
import com.laioffer.onlineorder.service.*;
import org.junit.jupiter.api.Test;
import org.springframework.web.server.ResponseStatusException;
import static org.junit.jupiter.api.Assertions.*;
class MenuItemServiceTest {
    private final MenuItemService menus = new MenuItemService(new RestaurantService());
    @Test void menuIsScopedToRestaurant() {
        assertEquals(2, menus.getMenuItemsByRestaurantId(1L).size());
        assertEquals(201L, menus.getMenuItemsByRestaurantId(2L).getFirst().id());
    }
    @Test void unknownRestaurantIsNotFound() {
        var error = assertThrows(ResponseStatusException.class, () -> menus.getMenuItemsByRestaurantId(999L));
        assertEquals(404, error.getStatusCode().value());
    }
}
