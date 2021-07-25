import React from 'react'

const headers: [string, string, string, string, string] = [
    "タイトル", "著者", "言語", "出版年", "売上部数"
];

const data: Array<[string, string, string, string, string]> = [
    [
        "The Lord of the Rings",
        "J. R. R. Tolkien",
        "English",
        "1954-1955",
        "150 million"
    ],
    [
        "Le Petit Prince (The Little Prince)",
        "Antoine de Saint-Exuperty",
        "French",
        "1943",
        "140 million"
    ],
    [
        "And Then There Were None",
        "Agatha Christie",
        "English",
        "1939",
        "107 million"
    ],
    [
        "Dream of the Red Chamber",
        "Cao Xueqin",
        "Chinese",
        "1754-1791",
        "100 million"
    ],
    [
        "The Hobbit",
        "J. R. R. Tolkien",
        "English",
        "1937",
        "100 million"
    ],
    [
        "She: AHistory of Adventure",
        "H. Rider Haggard",
        "English",
        "1887",
        "100 million"
    ]
]

export default class Excel extends React.Component {
    render() {
        return (
            <table>
                <thead>
                    {
                        headers.map((header: string) => {
                            return (
                                <th>{header}</th>
                            )
                        })
                    }
                </thead>
                {
                    data.map((row: Array<string>) => {
                        return (
                            <tr>
                                {
                                    row.map((item: string) => {
                                        return (
                                            <td>{item}</td>
                                        )
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </table>
        )
    }
}