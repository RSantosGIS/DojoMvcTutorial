define(['dojo/store/Memory'], function(Memory) {
    return new Memory({
        data: [
            {id: 1, title: 'Hey There', artist: 'Bette Midler'},
            {id: 2, title: 'Love or Confusion', artist: 'Hendrix'},
            {id: 3, title: 'Sugar Street', artist: 'Narell'},
        ]
    });
});