import { Injectable } from '@angular/core';
import { IUser } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class DataService {
  constructor() {}
  private users: IUser = {
    sarahedo: {
      id: 'sarahedo',
      name: 'Sarah Edo',
      avatarURL: 'https://robohash.org/DND.png?set=set1&size=150x150',

      answers: {
        '8xf0y6ziyjabvozdd253nd': 'optionOne',
        '6ni6ok3ym7mf1p33lnez': 'optionTwo',
        am8ehyc8byjqgar0jgpub9: 'optionTwo',
        loxhs1bqm25b708cmbf3g: 'optionTwo',
      },
      questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9'],
    },
    tylermcginnis: {
      id: 'tylermcginnis',
      name: 'Tyler McGinnis',
      avatarURL: 'https://robohash.org/FGG.png?set=set1&size=150x150',
      answers: {
        vthrdm985a262al8qx3do: 'optionOne',
        xj352vofupe1dqz9emx13r: 'optionTwo',
      },
      questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
    },
    johndoe: {
      id: 'johndoe',
      name: 'John Doe',
      avatarURL: 'https://robohash.org/ZVO.png?set=set1&size=150x150',

      answers: {
        xj352vofupe1dqz9emx13r: 'optionOne',
        vthrdm985a262al8qx3do: 'optionTwo',
        '6ni6ok3ym7mf1p33lnez': 'optionTwo',
      },
      questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
    },
  };

  generateUID() {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  }
  getUsers() {
    return { ...this.users };
  }
  _getUsers(): Promise<IUser> {
    return new Promise((res, rej) => {
      setTimeout(() => res(this.users), 1000);
    });
  }
}
