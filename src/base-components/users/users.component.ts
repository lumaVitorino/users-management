import { Component, OnChanges } from '@angular/core';
import { UsersService } from '@src/services/users/users.service';
import { User } from '@src/models/user';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})

export class UsersComponent {
    users: User[];
    newUser: string;
    isEditAll = false;

    constructor(private usersService: UsersService) {
        this.usersService.getUsers().subscribe(urs => this.users = urs);
    }

    addUser() {
        let newUsr = new User();
        newUsr.id = this.users.length + 1;
        newUsr.name = this.newUser;
        newUsr.isEditMode = false;
        this.usersService.createUsers(newUsr).subscribe(newU => {
            this.users.push(newU);
        });
    }

    deleteUser(userId: number) {
        this.usersService.deleteUser(userId).subscribe(any => {
            this.users = this.users.filter(usr => usr.id != userId);
        })
    }
    
    deleteAll() {
        this.users = [];
    }
    editAll() {
        this.isEditAll = true;
    }

    saveAll() {
        this.isEditAll = false;
    }

    editViewUser(user: User) {
        user.isEditMode = true;
    }

    updateUser(user: User) {
        this.usersService.updateUser(user.id, user).subscribe(any => {
            user.isEditMode = false;
            this.users = this.users.filter(usr => usr.id != user.id);
            this.users.push(user);
        })
    }
}
