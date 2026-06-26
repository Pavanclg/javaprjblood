package com.pavan.blooddonorfinder.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "donors")
@Data
public class Donor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private int age;

    private String gender;

    private String bloodGroup;

    private String phone;

    private String city;
}