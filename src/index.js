import { WeekPlannerCardTailored } from './card';
import { WeekPlannerCardTailoredEditor } from "./editor";
import { version } from '../package.json';

customElements.define(
    'week-planner-card-tailored',
    WeekPlannerCardTailored
);

window.customCards = window.customCards || [];
window.customCards.push({
    type: 'week-planner-card-tailored',
    name: 'Week Planner Card Tailored',
    description: 'My Card to display events for a number of days from one or several calendars.'
});

customElements.define(
    'week-planner-card-tailored-editor',
    WeekPlannerCardTailoredEditor
);

console.info(
    `%c week-planner-card-tailored %c v${version} `,
    'color: white; background: black; font-weight: 700;',
    'color: black; background: white; font-weight: 700;',
);