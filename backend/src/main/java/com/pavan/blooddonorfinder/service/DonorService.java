package com.pavan.blooddonorfinder.service;

import com.pavan.blooddonorfinder.entity.Donor;
import com.pavan.blooddonorfinder.repository.DonorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DonorService {

    @Autowired
    private DonorRepository donorRepository;

    // Save donor
    public Donor saveDonor(Donor donor) {
        return donorRepository.save(donor);
    }

    // Get all donors
    public List<Donor> getAllDonors() {
        return donorRepository.findAll();
    }
    public List<Donor> getDonorsByBloodGroup(String bloodGroup) {
        return donorRepository.findByBloodGroup(bloodGroup);
    }
    public Donor updateDonor(Long id, Donor donor) {
        Donor existing = donorRepository.findById(id).orElseThrow();

        existing.setName(donor.getName());
        existing.setAge(donor.getAge());
        existing.setGender(donor.getGender());
        existing.setBloodGroup(donor.getBloodGroup());
        existing.setPhone(donor.getPhone());
        existing.setCity(donor.getCity());

        return donorRepository.save(existing);
    }
    public void deleteDonor(Long id) {
        donorRepository.deleteById(id);
    }
}