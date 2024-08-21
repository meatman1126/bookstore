package com.example.bookstore.repository;

import com.example.bookstore.entity.Artist;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ArtistRepository extends JpaRepository<Artist, String> {
    
}
