package com.pavan.blooddonorfinder.controller;

import com.pavan.blooddonorfinder.entity.Donor;
import com.pavan.blooddonorfinder.service.DonorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/donors")
@CrossOrigin("*")
public class DonorController {

    @Autowired
    private DonorService donorService;

    // Add donor
    @PostMapping
    public Donor addDonor(@RequestBody Donor donor) {
        return donorService.saveDonor(donor);
    }

    // Get all donors
    @GetMapping
    public List<Donor> getAllDonors() {
        return donorService.getAllDonors();
    }
    @GetMapping("/bloodGroup/{bloodGroup}")
    public List<Donor> getDonorsByBloodGroup(@PathVariable String bloodGroup) {
        return donorService.getDonorsByBloodGroup(bloodGroup);
    }
    @PutMapping("/{id}")
    public Donor updateDonor(@PathVariable Long id, @RequestBody Donor donor) {
        return donorService.updateDonor(id, donor);
    }
    @DeleteMapping("/{id}")
    public String deleteDonor(@PathVariable Long id) {
        donorService.deleteDonor(id);
        return "Donor deleted successfully";
    }
}