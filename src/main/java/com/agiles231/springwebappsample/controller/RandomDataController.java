package com.agiles231.springwebappsample.controller;

import com.github.javafaker.service.FakeValuesService;
import com.github.javafaker.service.RandomService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.HashSet;
import java.util.Locale;
import java.util.Random;
import java.util.stream.IntStream;

@RestController
@RequestMapping("api/random/")
public class RandomDataController {

    private final Random random;

    public RandomDataController() {
        this.random = new Random();
    }

    @GetMapping("/emails")
    Collection<String> getRandomEmails(String domain, int count) {
        Collection<String> emails = new HashSet<String>();
        FakeValuesService fakeValuesService = new FakeValuesService(Locale.getDefault(), new RandomService());
        IntStream.range(0, count).forEach(i -> emails.add(fakeValuesService.bothify("????##@" + domain)));
        return emails;
    }

    @GetMapping("/ints")
    Collection<Integer> getRandomIntegers(int count) {
        Collection<Integer> integers = new HashSet<Integer>();
        IntStream.range(0, count).forEach(i -> integers.add(random.nextInt()));
        return integers;
    }
    @GetMapping("/doubles")
    Collection<Double> getRandomDoubles(int count) {
        Collection<Double> doubles = new HashSet<Double>();
        IntStream.range(0, count).forEach(i -> doubles.add(random.nextDouble()));
        return doubles;
    }
}
