package com.laioffer.onlineorder.service;
import com.laioffer.onlineorder.model.CartDto;
/** Integration port; implementation pending. Identity must come from the session. */
public interface CartService {
    CartDto getCart(long customerId);
    void addMenuItemToCart(long customerId, long menuItemId);
    void clearCart(long customerId);
}
