const dir = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0],
];

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    function move(position: Point, seen: boolean[][], path: Point[]): boolean {
        // Base Case(s):
        // 1. Off the maze
        if (position.y < 0 || position.y >= maze.length || position.x < 0 || position.x >= maze[position.y].length) {
            return false;
        }
        // 2. In a wall
        if (maze[position.y][position.x] === wall) {
            return false;
        }
        // 3. Been here before
        if (seen[position.y][position.x] === true) {
            return false;
        }
        // 4. At the end
        if (position.x === end.x && position.y === end.y) {
            path.push(position);
            return true;
        }

        // Pre-recurse: Add position to seen and path
        seen[position.y][position.x] = true;
        path.push(position);

        // Recurse: Move in all directions
        for (let i = 0; i < dir.length; ++i) {
            const [x, y] = dir[i];
            const new_position = {x: position.x + x, y: position.y + y} as Point;
            if (move(new_position, seen, path) === true) {
                return true;
            }
        }

        // Post-condition: Negative base case
        path.pop()
        return false;
    }

    const seen: boolean[][] = [];
    for (let i = 0; i < maze.length; ++i) {
        seen.push(new Array(maze[0].length).fill(false));
    }
    const solution: Point[] = [];

    move(start, seen, solution);

    return solution;
}