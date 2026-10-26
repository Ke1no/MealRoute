package com.laioffer.onlineorder.repository;
import com.laioffer.onlineorder.entity.OrderItemEntity;
import org.springframework.data.repository.ListCrudRepository;
public interface OrderItemRepository extends ListCrudRepository<OrderItemEntity, Long> {
    java.util.List<OrderItemEntity> getAllByCartId(Long cartId);
    OrderItemEntity findByCartIdAndMenuItemId(Long cartId, Long menuItemId);
}
