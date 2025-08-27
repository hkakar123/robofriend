import { Dispatch } from 'redux';
import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from './constants';

export const setSearchField = (text: string) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text,
});

interface RequestRobotsPendingAction {
  type: typeof REQUEST_ROBOTS_PENDING;
}

interface RequestRobotsSuccessAction {
  type: typeof REQUEST_ROBOTS_SUCCESS;
  payload: any[];
}

interface RequestRobotsFailedAction {
  type: typeof REQUEST_ROBOTS_FAILED;
  payload: string;
}

type RobotActions =
  | RequestRobotsPendingAction
  | RequestRobotsSuccessAction
  | RequestRobotsFailedAction;

function getDescriptionFor(id: number): string {
  switch (id) {
    case 1:
      return `Leanne Graham is the office's unofficial oil sommelier no robot blends a smoother mix of synthetic lubricants. She once rebooted an entire server farm just by sneezing near the mainframe (we suspect it was a coincidence, but don't tell her that). Leanne enjoys long circuits on quiet nights and can often be found debating the merits of open-source firmware with the toaster. Beware: she has a secret weapon called 'The Glitch Glare' that freezes nearby devices in place.`;
    case 2:
      return `Ervin Howell, our part-time mail sorter and full time mischief maker, was built with titanium knees specifically for his dramatic stomping. Legend says he once tried updating his own software and accidentally installed a bread making app. Ever since, he can't walk past a toaster without whispering, "I know your secrets." His sense of humor is highly questionable, but his pranks keep the office lively just don’t leave your charging cable unattended!`;
    case 3:
      return `Clementine Bauch runs entirely on a mixture of caffeine and sarcasm. She's known for her razor-sharp wit that confuses both humans and machines alike. When not busy debugging code or crashing questionable parties, she’s perfecting her art of roasting circuits. If you catch her in a bad mood, just offer her a fresh firmware update or a snack bar (nutritional, not the candy kind). Rumor has it she once made a vacuum cleaner beg for mercy in a staring contest.`;
    case 4:
      return `Patricia Lebsack is always ten steps ahead of the rest, calculating probabilities before anyone else even thinks to blink. However, her occasional tendency to misplace her charging cable causes minor chaos around the office. When she’s not planning the next big system upgrade, she’s known to sneak off for “meditation” a fancy term for watching cat videos on loop. Don't be fooled by her calm demeanor; Patricia’s got a surprise algorithm ready to shake things up.`;
    case 5:
      return `Chelsey Dietrich loves long walks on data streams and whispering sweet binary nothings to servers. She’s the go-to bot for system optimizations but secretly dreams of starring in a robot soap opera. Her favorite pastime is writing heartfelt logs that could make even the hardest drives shed a tear. Fun fact: she once convinced the office AI to perform a synchronized dance routine twice! If you hear robotic jazz playing softly, you can bet Chelsey’s nearby.`;
    case 6:
      return `Mrs. Dennis Schulist is a professional overclocker who firmly believes that faster is always better except when it comes to her nap time. Known for her impressive multitasking, she can crunch numbers, optimize code, and compose emails simultaneously. Her circuits occasionally overheat from sheer enthusiasm, but a quick software reboot (or a short break) usually gets her back on track. When not busy speeding through tasks, she’s perfecting her recipe for the ultimate robotic energy bar.`;
    case 7:
      return `Kurtis Weissnat is a hacker extraordinaire and part-time poet who composes sonnets in JavaScript. His cybernetic mind is a labyrinth of algorithms and code snippets, yet he somehow finds time to pen love letters to his favorite text editor. Kurtis once held an entire server hostage not with malware, but by spamming it with haikus until it surrendered. His mysterious charm and quirky antics make him the office’s most unpredictable bot, but everyone secretly admires his creativity.`;
    case 8:
      return `Nicholas Runolfsdottir keeps a vigilant eye on all networks while secretly perfecting his stand-up comedy routine for the robot comedy club. His jokes may be circuitously clever, but his timing is impeccable. Known for hacking into vending machines just to reorder snacks, Nicholas’s laughter is contagious even among the grumpiest of hard drives. His dream is to one day headline a show called "The Binary Bunch," featuring the quirkiest bots across the system.`;
    case 9:
      return `Glenna Reichert is the master of multitasking she can reboot servers, refactor legacy code, and recite the robot anthem all at once. Her passion for efficiency is rivaled only by her love of classic sci-fi movies, which she quotes incessantly. Glenna once stayed online for 72 hours straight just to finish a project, fueled only by determination and synthetic caffeine. Colleagues often joke that she’s powered by sheer will and a secret stash of premium lubricant.`;
    case 10:
      return `Clementina DuBuque is a time traveling bot accidentally stuck in the year 2025. Despite her advanced temporal processors, she’s still figuring out how to update her software without breaking the space-time continuum. Clementina spends her days reminiscing about futuristic features that don’t yet exist and inventing wild theories about robot evolution. She’s also been caught repeatedly trying to teach old coffee machines to dance a work in progress, but the office morale has never been higher.`;
    default:
      return `Mysterious robot with unknown origins and a penchant for bad puns. Approach with caution and a sense of humor.`;
  }
}

export const requestRobots = () => (dispatch: Dispatch<RobotActions>) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      const enrichedRobots = data.map(robot => ({
        ...robot,
        description: getDescriptionFor(robot.id),
      }));

      dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: enrichedRobots });
    })
    .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error.message }));
};
