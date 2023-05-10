export default function two_crystal_balls(breaks: boolean[]): number {
    // Jump sqrt(breaks.length) until breaks
    const stride = Math.floor(Math.sqrt(breaks.length));
    const number_of_strides = Math.floor(breaks.length / stride);
    for (let i = 1; i <= number_of_strides; ++i) {
        if (breaks[stride * i]) {
            // Walk from previous jump forward
            for (let j = stride * (i - 1) + 1; j <= stride * i; ++j) {
                if (breaks[j]) {
                    return j;
                }
            }
        }
    }
    // Has to break in remaining floors
    for (let i = stride * number_of_strides + 1; i < breaks.length; ++i) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1;
}