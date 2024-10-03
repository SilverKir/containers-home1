import { Team } from "../Team";

const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
        {
            id: 8,
            name: 'Двойной выстрел',
            icon: 'http://...',
            description: 'Двойной выстрел наносит двойной урон'
        },
        {
            id: 9,
            name: 'Нокаутирующий удар',
            icon: 'http://...'
            // <- обратите внимание, описание "засекречено"
        }
    ]
};

const character1 = {
    name: 'Лучник1',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10
}


let team = new Team();

test("Test Team add method", () => {
    team.add(character);
    expect(team.members.has(character)).toBe(true)
    expect(team.members.size).toBe(1)
})

test("Test Team add the same method", () => {
    expect(() => team.add(character)).toThrow("Already in Team")
    expect(team.members.size).toBe(1)
})

test("Test Team add new character method", () => {
    team.add(character1);
    expect(team.members.has(character1)).toBe(true);
    expect(team.members.size).toBe(2)
})

test("Test Team addALL method", () => {
    team.addAll(
        {
            name: 'Лучник1',
            type: 'Bowman',
            health: 50,
            level: 3,
            attack: 40,
            defence: 10
        },

        {
            name: "Hitman1111",
            type: 'Daemon',
            health: 100,
            level: 1,
            attack: 10,
            defence: 40
        },

        {
            name: "Himan",
            type: 'Magician',
            health: 100,
            level: 1,
            attack: 10,
            defence: 40
        },

        character,
        [
            {
                name: "Himan23",
                type: 'Magician',
                health: 100,
                level: 1,
                attack: 10,
                defence: 40
            },
            character1,
            {
                name: "Hi11",
                type: 'Daemon',
                health: 100,
                level: 1,
                attack: 10,
                defence: 40
            },
        ]
    );
    expect(team.members.size).toBe(7)
})


test("Test toArray method", () => {
    const army = team.toArray();
    expect(Array.isArray(army)).toBe(true);
    expect(army.length).toBe(7);
})