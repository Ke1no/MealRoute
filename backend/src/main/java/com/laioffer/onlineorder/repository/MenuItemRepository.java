package com.laioffer.onlineorder.repository;
import com.laioffer.onlineorder.entity.MenuItemEntity;
import org.springframework.data.repository.ListCrudRepository;
public interface MenuItemRepository extends ListCrudRepository<MenuItemEntity, Long> {
    java.util.List<MenuItemEntity> getByRestaurantId(Long restaurantId);
}
