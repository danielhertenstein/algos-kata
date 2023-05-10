export default function two_crystal_balls(breaks: boolean[]): number {
    // Jump sqrt(breaks.length) until breaks
    const stride = Math.floor(Math.sqrt(breaks.length));
    let i = stride;
    for (; i <= breaks.length; i += stride) {
        if (breaks[i]) {
            break;
        }
    }

    i -= stride;

    for (let j = 0; j <= stride && i < breaks.length; ++j, ++i) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1;
}