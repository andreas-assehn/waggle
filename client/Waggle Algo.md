Important

- Geographical location

- Energy level (Temperament)

- Size

- Age

- Gender

Not so important

- Breed

- Likes

- Dont likes
1. Get a list of all potential matches within the geographical bounderies.

2. Sort by match preferences. E.g if a user has chosen 1 preference this should be regarded as most important(User must be informed of this in settings).
   
   Say you have a female dog in heat, you probable want to have only other female dogs as the most relevant.
   
   If several are chosen it will be sorted on which dogs ticks of most criterias, in a descending manner.
   
   As a baseline it will be sorted on the GESAG algo.

3. Could potentially show verified users first (Encouraging people to get verified)

```
function findWaggles ({ user }) {
    filtered = filterByGeo(user.maxDistance)
    return sortByPreference(filtered, user.preferences) {
        return waggles
}
}
```

Actual algorithm would run like this:

(G)ESAG => (G)ESA => (G)ES => (G)E

(G)SAG => (G)SA => (G)S

(G)AG => (G)A

(G)G 