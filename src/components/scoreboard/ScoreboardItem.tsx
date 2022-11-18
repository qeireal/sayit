export type ScoreboardItemModel = {
    id: number;
    position: number;
    name: string;
    result: number;
};

export type ScoreboardItemProps = {
    item: ScoreboardItemModel;
};

export function ScoreboardItem(props: ScoreboardItemProps) {
    const {
        item: { position, name, result },
    } = props;

    return (
        <tr>
            <td>{position}</td>
            <td>{name}</td>
            <td>{result}</td>
        </tr>
    );
}
