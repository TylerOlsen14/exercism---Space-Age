export const age = (planet,age_seconds) => {
    const Earth = 1;
    const Mercury = 0.2408467;
    const Venus = 0.61519726;
    const Mars = 1.8808158;
    const Jupiter = 11.862615;
    const Saturn = 29.447498;
    const Uranus = 84.016846;
    const Neptune = 164.79132;
    const Seconds_Year = 31557600; //Earth year in seconds
    let Age = 0

        switch (planet){
            case 'earth':
                Age = age_seconds / (Seconds_Year*Earth);
            break;
            case 'mercury':
                Age = age_seconds / (Seconds_Year*Mercury);
            break;
            case 'venus':
                Age = age_seconds / (Seconds_Year*Venus);
            break;
            case 'mars':
                Age = age_seconds / (Seconds_Year*Mars);
            break;
            case 'jupiter':
                Age = age_seconds / (Seconds_Year*Jupiter);
            break;
            case 'saturn':
                Age = age_seconds / (Seconds_Year*Saturn);
            break;
            case 'uranus':
                Age = age_seconds / (Seconds_Year*Uranus);
            break;
            case 'neptune':
                Age = age_seconds / (Seconds_Year*Neptune);
            break;
        }
    Age = Age * 100;
    Age = Math.round(Age);
    Age = Age / 100;
    return Age;
};
