package com.laioffer.onlineorder.service;
import com.laioffer.onlineorder.entity.CustomerEntity;
/** Integration port; password hashing, transaction and duplicate-email handling pending. */
public interface CustomerService {
    CustomerEntity getCustomerByEmail(String email);
    void signUp(String email, String password, String firstName, String lastName);
}
