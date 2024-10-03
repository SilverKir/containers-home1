export class Team {
    members;

    constructor() {
        this.members = new Set();
    }

    add(Character) {
        if (this.members.has(Character)) {
            throw new Error("Already in Team");
        }
        else {
            this.members.add(Character);
        }
    }

    addAll(...Characters) {
        for (const Character of Characters) {
            if (Array.isArray(Character)) {
                for (const element of Character) {
                    this.members.add(element);
                }

            } else {
                this.members.add(Character);
            }
        }
    }

    toArray() {
        return [...this.members];
    }

}