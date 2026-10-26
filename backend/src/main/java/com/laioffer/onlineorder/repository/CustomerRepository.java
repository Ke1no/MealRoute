package com.laioffer.onlineorder.repository;
import com.laioffer.onlineorder.entity.CustomerEntity;
import org.springframework.data.repository.ListCrudRepository;
public interface CustomerRepository extends ListCrudRepository<CustomerEntity, Long> {
    CustomerEntity findByEmail(String email);
}
