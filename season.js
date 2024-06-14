const seasonsData = {
    "2023/24": [
        { rank: 1, team: "맨체스터 시티", games: 38, points: 91, wins: 28, draws: 7, losses: 3, goalsFor: 96, goalsAgainst: 34, goalDifference: 62 },
        { rank: 2, team: "아스널", games: 38, points: 89, wins: 28, draws: 5, losses: 5, goalsFor: 91, goalsAgainst: 29, goalDifference: 62 },
        { rank: 3, team: "리버풀", games: 38, points: 82, wins: 24, draws: 10, losses: 4, goalsFor: 86, goalsAgainst: 41, goalDifference: 45 },
        { rank: 4, team: "아스톤빌라", games: 38, points: 68, wins: 20, draws: 8, losses: 10, goalsFor: 76, goalsAgainst: 61, goalDifference: 15 },
        { rank: 5, team: "토트넘 홋스퍼", games: 38, points: 66, wins: 20, draws: 6, losses: 12, goalsFor: 74, goalsAgainst: 61, goalDifference: 13 },
        { rank: 6, team: "첼시 FC", games: 38, points: 63, wins: 18, draws: 9, losses: 11, goalsFor: 77, goalsAgainst: 63, goalDifference: 14 },
        { rank: 7, team: "뉴캐슬 유나이티드", games: 38, points: 60, wins: 18, draws: 6, losses: 14, goalsFor: 85, goalsAgainst: 62, goalDifference: 23 },
        { rank: 8, team: "맨체스터 유나이티드", games: 38, points: 60, wins: 18, draws: 6, losses: 14, goalsFor: 57, goalsAgainst: 58, goalDifference: -1 },
        { rank: 9, team: "웨스트햄 유나이티드", games: 38, points: 52, wins: 14, draws: 10, losses: 14, goalsFor: 60, goalsAgainst: 74, goalDifference: -14 },
        { rank: 10, team: "크리스탈 팰리스", games: 38, points: 49, wins: 13, draws: 10, losses: 15, goalsFor: 57, goalsAgainst: 58, goalDifference: -1 },
        { rank: 11, team: "브라이턴", games: 38, points: 48, wins: 12, draws: 12, losses: 14, goalsFor: 55, goalsAgainst: 62, goalDifference: -7 },
        { rank: 12, team: "본머스", games: 38, points: 48, wins: 13, draws: 9, losses: 16, goalsFor: 54, goalsAgainst: 67, goalDifference: -13 },
        { rank: 13, team: "풀럼", games: 38, points: 47, wins: 13, draws: 8, losses: 17, goalsFor: 55, goalsAgainst: 61, goalDifference: -6 },
        { rank: 14, team: "울버햄튼", games: 38, points: 46, wins: 13, draws: 7, losses: 18, goalsFor: 50, goalsAgainst: 65, goalDifference: -15 },
        { rank: 15, team: "에버턴", games: 38, points: 40, wins: 13, draws: 9, losses: 16, goalsFor: 40, goalsAgainst: 51, goalDifference: -11 },
        { rank: 16, team: "브렌트퍼드", games: 38, points: 39, wins: 10, draws: 9, losses: 19, goalsFor: 56, goalsAgainst: 65, goalDifference: -9 },
        { rank: 17, team: "노팅엄 포레스트", games: 38, points: 32, wins: 9, draws: 5, losses: 20, goalsFor: 49, goalsAgainst: 67, goalDifference: -18 },
        { rank: 18, team: "루턴 타운", games: 38, points: 26, wins: 6, draws: 8, losses: 24, goalsFor: 52, goalsAgainst: 85, goalDifference: -33 },
        { rank: 19, team: "번리", games: 38, points: 24, wins: 5, draws: 9, losses: 24, goalsFor: 41, goalsAgainst: 78, goalDifference: -37 },
        { rank: 20, team: "셰필드 유나이티드", games: 38, points: 16, wins: 3, draws: 7, losses: 28, goalsFor: 35, goalsAgainst: 104, goalDifference: -69 }
    ],
"2022/23": [
        { rank: 1, team: "맨체스터 시티", games: 38, points: 89, wins: 28, draws: 5, losses: 5, goalsFor: 94, goalsAgainst: 33, goalDifference:61 },
        { rank: 2, team: "아스널", games: 38, points: 84, wins: 26, draws: 6, losses: 6, goalsFor: 88, goalsAgainst: 33, goalDifference: 55 },
        { rank: 3, team: "맨체스터 유나이티드", games: 38, points: 75, wins: 23, draws: 6, losses: 9, goalsFor: 58, goalsAgainst: 43, goalDifference: 15 },
        { rank: 4, team: "뉴캐슬 유나이티드", games: 38, points: 71, wins: 19, draws: 14, losses: 5, goalsFor: 68, goalsAgainst: 33, goalDifference: 35 },
        { rank: 5, team: "리버풀", games: 38, points: 67, wins: 19, draws: 10, losses: 9, goalsFor: 75, goalsAgainst: 47, goalDifference: 28 },
        { rank: 6, team: "브라이튼 앤 호브 알비온", games: 38, points: 62, wins: 18, draws: 8, losses: 12, goalsFor: 72, goalsAgainst: 53, goalDifference: 19 },
        { rank: 7, team: "아스톤 빌라", games: 38, points: 61, wins: 18, draws: 7, losses: 13, goalsFor: 51, goalsAgainst: 46, goalDifference: 5 },
        { rank: 8, team: "토트넘 홋스퍼", games: 38, points: 60, wins: 17, draws: 9, losses: 12, goalsFor: 70, goalsAgainst: 63, goalDifference: 7 },
        { rank: 9, team: "브렌트퍼드", games: 38, points: 59, wins: 15, draws: 14, losses: 9, goalsFor: 58, goalsAgainst: 46, goalDifference: 12 },
        { rank: 10, team: "풀럼", games: 38, points: 52, wins: 15, draws: 7, losses: 16, goalsFor: 55, goalsAgainst: 53, goalDifference: 2 },
        { rank: 11, team: "크리스탈 팰리스", games: 38, points: 45, wins: 11, draws: 12, losses: 15, goalsFor: 40, goalsAgainst: 49, goalDifference: -9 },
        { rank: 12, team: "첼시", games: 38, points: 44, wins: 11, draws: 11, losses: 16, goalsFor: 38, goalsAgainst: 47, goalDifference: -9 },
        { rank: 13, team: "울버햄튼 원더러스", games: 38, points: 41, wins: 11, draws: 8, losses: 19, goalsFor: 31, goalsAgainst: 53, goalDifference: -22 },
        { rank: 14, team: "웨스트햄 유나이티드", games: 38, points: 40, wins: 11, draws: 7, losses: 20, goalsFor: 42, goalsAgainst: 55, goalDifference: -13 },
        { rank: 15, team: "본머스", games: 38, points: 39, wins: 11, draws: 6, losses: 21, goalsFor: 37, goalsAgainst: 71, goalDifference: -34 },
        { rank: 16, team: "노팅엄 포레스트", games: 38, points: 38, wins: 9, draws: 11, losses: 18, goalsFor: 38, goalsAgainst: 68, goalDifference: -30 },
        { rank: 17, team: "에버턴", games: 38, points: 36, wins: 8, draws: 12, losses: 18, goalsFor: 34, goalsAgainst: 57, goalDifference: -23 },
        { rank: 18, team: "레스터 시티", games: 38, points: 34, wins: 9, draws: 7, losses: 22, goalsFor: 51, goalsAgainst: 68, goalDifference: -17 },
        { rank: 19, team: "리즈 유나이티드", games: 38, points: 31, wins: 7, draws: 10, losses: 21, goalsFor: 48, goalsAgainst: 78, goalDifference: -30 },
        { rank: 20, team: "사우샘프턴", games: 38, points: 25, wins: 6, draws: 7, losses: 25, goalsFor: 36, goalsAgainst: 73, goalDifference: -37 }
    ],
    "2021/22": [
        { rank: 1, team: "맨체스터 시티", games: 38, points: 93, wins: 29, draws: 6, losses: 3, goalsFor: 99, goalsAgainst: 26, goalDifference: 73 },
        { rank: 2, team: "리버풀", games: 38, points: 92, wins: 28, draws: 8, losses: 2, goalsFor: 94, goalsAgainst: 26, goalDifference: 68 },
        { rank: 3, team: "첼시", games: 38, points: 74, wins: 21, draws: 11, losses: 6, goalsFor: 76, goalsAgainst: 33, goalDifference: 43 },
        { rank: 4, team: "토트넘 홋스퍼", games: 38, points: 71, wins: 22, draws: 5, losses: 11, goalsFor: 69, goalsAgainst: 40, goalDifference: 29 },
        { rank: 5, team: "아스널", games: 38, points: 69, wins: 21, draws: 6, losses: 11, goalsFor: 61, goalsAgainst: 34, goalDifference: 27 },
        { rank: 6, team: "맨체스터 유나이티드", games: 38, points: 58, wins: 16, draws: 10, losses: 12, goalsFor: 57, goalsAgainst: 57, goalDifference: 0 },
        { rank: 7, team: "웨스트햄 유나이티드", games: 38, points: 56, wins: 16, draws: 8, losses: 14, goalsFor: 60, goalsAgainst: 51, goalDifference: 9 },
        { rank: 8, team: "레스터 시티", games: 38, points: 52, wins: 14, draws: 10, losses: 14, goalsFor: 62, goalsAgainst: 59, goalDifference: 3 },
        { rank: 9, team: "브라이턴", games: 38, points: 51, wins: 12, draws: 15, losses: 11, goalsFor: 42, goalsAgainst: 44, goalDifference: -2 },
        { rank: 10, team: "울버햄튼", games: 38, points: 51, wins: 15, draws: 6, losses: 17, goalsFor: 38, goalsAgainst: 43, goalDifference: -5 },
        { rank: 11, team: "뉴캐슬 유나이티드", games: 38, points: 49, wins: 13, draws: 10, losses: 15, goalsFor: 44, goalsAgainst: 62, goalDifference: -18 },
        { rank: 12, team: "크리스탈 팰리스", games: 38, points: 48, wins: 11, draws: 15, losses: 12, goalsFor: 50, goalsAgainst: 46, goalDifference: 4 },
        { rank: 13, team: "브렌트퍼드", games: 38, points: 46, wins: 13, draws: 7, losses: 18, goalsFor: 48, goalsAgainst: 56, goalDifference: -8 },
        { rank: 14, team: "아스톤 빌라", games: 38, points: 45, wins: 13, draws: 6, losses: 19, goalsFor: 52, goalsAgainst: 54, goalDifference: -2 },
        { rank: 15, team: "사우샘프턴", games: 38, points: 40, wins: 9, draws: 13, losses: 16, goalsFor: 43, goalsAgainst: 67, goalDifference: -24 },
        { rank: 16, team: "에버턴", games: 38, points: 39, wins: 11, draws: 6, losses: 21, goalsFor: 43, goalsAgainst: 66, goalDifference: -23 },
        { rank: 17, team: "리즈 유나이티드", games: 38, points: 38, wins: 9, draws: 11, losses: 18, goalsFor: 42, goalsAgainst: 79, goalDifference: -37 },
        { rank: 18, team: "번리", games: 38, points: 35, wins: 7, draws: 14, losses: 17, goalsFor: 34, goalsAgainst: 53, goalDifference: -19 },
        { rank: 19, team: "왓포드", games: 38, points: 23, wins: 6, draws: 5, losses: 27, goalsFor: 34, goalsAgainst: 77, goalDifference: -43 },
        { rank: 20, team: "노리치 시티", games: 38, points: 22, wins: 5, draws: 7, losses: 26, goalsFor: 23, goalsAgainst: 84, goalDifference: -61 }
    ],
    "2020/21": [
        { rank: 1, team: "맨체스터 시티", games: 38, points: 86, wins: 27, draws: 5, losses: 6, goalsFor: 83, goalsAgainst: 32, goalDifference: 51 },
        { rank: 2, team: "맨체스터 유나이티드", games: 38, points: 74, wins: 21, draws: 11, losses: 6, goalsFor: 73, goalsAgainst: 44, goalDifference: 29 },
        { rank: 3, team: "리버풀", games: 38, points: 69, wins: 20, draws: 9, losses: 9, goalsFor: 68, goalsAgainst: 42, goalDifference: 26 },
        { rank: 4, team: "첼시", games: 38, points: 67, wins: 19, draws: 10, losses: 9, goalsFor: 58, goalsAgainst: 36, goalDifference: 22 },
        { rank: 5, team: "레스터 시티", games: 38, points: 66, wins: 20, draws: 6, losses: 12, goalsFor: 68, goalsAgainst: 50, goalDifference: 18 },
        { rank: 6, team: "웨스트햄 유나이티드", games: 38, points: 65, wins: 19, draws: 8, losses: 11, goalsFor: 62, goalsAgainst: 47, goalDifference: 15 },
        { rank: 7, team: "토트넘 홋스퍼", games: 38, points: 62, wins: 18, draws: 8, losses: 12, goalsFor: 68, goalsAgainst: 45, goalDifference: 23 },
        { rank: 8, team: "아스널", games: 38, points: 61, wins: 18, draws: 7, losses: 13, goalsFor: 55, goalsAgainst: 39, goalDifference: 16 },
        { rank: 9, team: "리즈 유나이티드", games: 38, points: 59, wins: 18, draws: 5, losses: 15, goalsFor: 62, goalsAgainst: 54, goalDifference: 8 },
        { rank: 10, team: "에버턴", games: 38, points: 59, wins: 17, draws: 8, losses: 13, goalsFor: 47, goalsAgainst: 48, goalDifference: -1 },
        { rank: 11, team: "아스톤 빌라", games: 38, points: 55, wins: 16, draws: 7, losses: 15, goalsFor: 55, goalsAgainst: 46, goalDifference: 9 },
        { rank: 12, team: "뉴캐슬 유나이티드", games: 38, points: 45, wins: 12, draws: 9, losses: 17, goalsFor: 46, goalsAgainst: 62, goalDifference: -16 },
        { rank: 13, team: "울버햄튼", games: 38, points: 45, wins: 12, draws: 9, losses: 17, goalsFor: 36, goalsAgainst: 52, goalDifference: -16 },
        { rank: 14, team: "크리스탈 팰리스", games: 38, points: 44, wins: 12, draws: 8, losses: 18, goalsFor: 41, goalsAgainst: 66, goalDifference: -25 },
        { rank: 15, team: "사우샘프턴", games: 38, points: 43, wins: 12, draws: 7, losses: 19, goalsFor: 47, goalsAgainst: 68, goalDifference: -21 },
        { rank: 16, team: "브라이턴", games: 38, points: 41, wins: 9, draws: 14, losses: 15, goalsFor: 40, goalsAgainst: 46, goalDifference: -6 },
        { rank: 17, team: "번리", games: 38, points: 39, wins: 10, draws: 9, losses: 19, goalsFor: 33, goalsAgainst: 55, goalDifference: -22 },
        { rank: 18, team: "풀럼", games: 38, points: 28, wins: 5, draws: 13, losses: 20, goalsFor: 27, goalsAgainst: 53, goalDifference: -26 },
        { rank: 19, team: "웨스트 브로미치", games: 38, points: 26, wins: 5, draws: 11, losses: 22, goalsFor: 35, goalsAgainst: 76, goalDifference: -41 },
        { rank: 20, team: "셰필드 유나이티드", games: 38, points: 23, wins: 7, draws: 2, losses: 29, goalsFor: 20, goalsAgainst: 63, goalDifference: -43 }
    ],
    "2019/20": [
        { rank: 1, team: "리버풀", games: 38, points: 99, wins: 32, draws: 3, losses: 3, goalsFor: 85, goalsAgainst: 33, goalDifference: 52 },
        { rank: 2, team: "맨체스터 시티", games: 38, points: 81, wins: 26, draws: 3, losses: 9, goalsFor: 102, goalsAgainst: 35, goalDifference: 67 },
        { rank: 3, team: "맨체스터 유나이티드", games: 38, points: 66, wins: 18, draws: 12, losses: 8, goalsFor: 66, goalsAgainst: 36, goalDifference: 30 },
        { rank: 4, team: "첼시", games: 38, points: 66, wins: 20, draws: 6, losses: 12, goalsFor: 69, goalsAgainst: 54, goalDifference: 15 },
        { rank: 5, team: "레스터 시티", games: 38, points: 62, wins: 18, draws: 8, losses: 12, goalsFor: 67, goalsAgainst: 41, goalDifference: 26 },
        { rank: 6, team: "토트넘 홋스퍼", games: 38, points: 59, wins: 16, draws: 11, losses: 11, goalsFor: 61, goalsAgainst: 47, goalDifference: 14 },
        { rank: 7, team: "울버햄튼 원더러스", games: 38, points: 59, wins: 15, draws: 14, losses: 9, goalsFor: 51, goalsAgainst: 40, goalDifference: 11 },
        { rank: 8, team: "아스널", games: 38, points: 56, wins: 14, draws: 14, losses: 10, goalsFor: 56, goalsAgainst: 48, goalDifference: 8 },
        { rank: 9, team: "셰필드 유나이티드", games: 38, points: 54, wins: 14, draws: 12, losses: 12, goalsFor: 39, goalsAgainst: 39, goalDifference: 0 },
        { rank: 10, team: "번리", games: 38, points: 54, wins: 15, draws: 9, losses: 14, goalsFor: 43, goalsAgainst: 50, goalDifference: -7 },
        { rank: 11, team: "사우샘프턴", games: 38, points: 52, wins: 15, draws: 7, losses: 16, goalsFor: 51, goalsAgainst: 60, goalDifference: -9 },
        { rank: 12, team: "에버턴", games: 38, points: 49, wins: 13, draws: 10, losses: 15, goalsFor: 44, goalsAgainst: 56, goalDifference: -12 },
        { rank: 13, team: "뉴캐슬 유나이티드", games: 38, points: 44, wins: 11, draws: 11, losses: 16, goalsFor: 38, goalsAgainst: 58, goalDifference: -20 },
        { rank: 14, team: "크리스탈 팰리스", games: 38, points: 43, wins: 11, draws: 10, losses: 17, goalsFor: 31, goalsAgainst: 50, goalDifference: -19 },
        { rank: 15, team: "브라이턴 앤 호브 알비온", games: 38, points: 41, wins: 9, draws: 14, losses: 15, goalsFor: 39, goalsAgainst: 54, goalDifference: -15 },
        { rank: 16, team: "웨스트햄 유나이티드", games: 38, points: 39, wins: 10, draws: 9, losses: 19, goalsFor: 49, goalsAgainst: 62, goalDifference: -13 },
        { rank: 17, team: "애스턴 빌라", games: 38, points: 35, wins: 9, draws: 8, losses: 21, goalsFor: 41, goalsAgainst: 67, goalDifference: -26 },
        { rank: 18, team: "본머스", games: 38, points: 34, wins: 9, draws: 7, losses: 22, goalsFor: 40, goalsAgainst: 65, goalDifference: -25 },
        { rank: 19, team: "왓포드", games: 38, points: 34, wins: 8, draws: 10, losses: 20, goalsFor: 36, goalsAgainst: 64, goalDifference: -28 },
        { rank: 20, team: "노리치 시티", games: 38, points: 21, wins: 5, draws: 6, losses: 27, goalsFor: 26, goalsAgainst: 75, goalDifference: -49 }
    ],
    "2018/19": [
        { rank: 1, team: "맨체스터 시티", games: 38, points: 98, wins: 32, draws: 2, losses: 4, goalsFor: 95, goalsAgainst: 23, goalDifference: 72 },
        { rank: 2, team: "리버풀", games: 38, points: 97, wins: 30, draws: 7, losses: 1, goalsFor: 89, goalsAgainst: 22, goalDifference: 67 },
        { rank: 3, team: "첼시", games: 38, points: 72, wins: 21, draws: 9, losses: 8, goalsFor: 63, goalsAgainst: 39, goalDifference: 24 },
        { rank: 4, team: "토트넘 홋스퍼", games: 38, points: 71, wins: 23, draws: 2, losses: 13, goalsFor: 67, goalsAgainst: 39, goalDifference: 28 },
        { rank: 5, team: "아스널", games: 38, points: 70, wins: 21, draws: 7, losses: 10, goalsFor: 73, goalsAgainst: 51, goalDifference: 22 },
        { rank: 6, team: "맨체스터 유나이티드", games: 38, points: 66, wins: 19, draws: 9, losses: 10, goalsFor: 65, goalsAgainst: 54, goalDifference: 11 },
        { rank: 7, team: "울버햄튼 원더러스", games: 38, points: 57, wins: 16, draws: 9, losses: 13, goalsFor: 47, goalsAgainst: 46, goalDifference: 1 },
        { rank: 8, team: "에버턴", games: 38, points: 54, wins: 15, draws: 9, losses: 14, goalsFor: 54, goalsAgainst: 46, goalDifference: 8 },
        { rank: 9, team: "레스터 시티", games: 38, points: 52, wins: 15, draws: 7, losses: 16, goalsFor: 51, goalsAgainst: 48, goalDifference: 3 },
        { rank: 10, team: "웨스트햄 유나이티드", games: 38, points: 52, wins: 15, draws: 7, losses: 16, goalsFor: 52, goalsAgainst: 55, goalDifference: -3 },
        { rank: 11, team: "왓포드", games: 38, points: 50, wins: 14, draws: 8, losses: 16, goalsFor: 52, goalsAgainst: 59, goalDifference: -7 },
        { rank: 12, team: "크리스탈 팰리스", games: 38, points: 49, wins: 14, draws: 7, losses: 17, goalsFor: 51, goalsAgainst: 53, goalDifference: -2 },
        { rank: 13, team: "뉴캐슬 유나이티드", games: 38, points: 45, wins: 12, draws: 9, losses: 17, goalsFor: 42, goalsAgainst: 48, goalDifference: -6 },
        { rank: 14, team: "본머스", games: 38, points: 45, wins: 13, draws: 6, losses: 19, goalsFor: 56, goalsAgainst: 70, goalDifference: -14 },
        { rank: 15, team: "번리", games: 38, points: 40, wins: 11, draws: 7, losses: 20, goalsFor: 45, goalsAgainst: 68, goalDifference: -23 },
        { rank: 16, team: "사우샘프턴", games: 38, points: 39, wins: 9, draws: 12, losses: 17, goalsFor: 45, goalsAgainst: 65, goalDifference: -20 },
        { rank: 17, team: "브라이턴 앤 호브 알비온", games: 38, points: 36, wins: 9, draws: 9, losses: 20, goalsFor: 35, goalsAgainst: 60, goalDifference: -25 },
        { rank: 18, team: "카디프 시티", games: 38, points: 34, wins: 10, draws: 4, losses: 24, goalsFor: 34, goalsAgainst: 69, goalDifference: -35 },
        { rank: 19, team: "풀럼", games: 38, points: 26, wins: 7, draws: 5, losses: 26, goalsFor: 34, goalsAgainst: 81, goalDifference: -47 },
        { rank: 20, team: "허더즈필드 타운", games: 38, points: 16, wins: 3, draws: 7, losses: 28, goalsFor: 22, goalsAgainst: 76, goalDifference: -54 }
    ],
    "2017/18": [
        { rank: 1, team: "맨체스터 시티", games: 38, points: 100, wins: 32, draws: 4, losses: 2, goalsFor: 106, goalsAgainst: 27, goalDifference: 79 },
        { rank: 2, team: "맨체스터 유나이티드", games: 38, points: 81, wins: 25, draws: 6, losses: 7, goalsFor: 68, goalsAgainst: 28, goalDifference: 40 },
        { rank: 3, team: "토트넘 홋스퍼", games: 38, points: 77, wins: 23, draws: 8, losses: 7, goalsFor: 74, goalsAgainst: 36, goalDifference: 38 },
        { rank: 4, team: "리버풀", games: 38, points: 75, wins: 21, draws: 12, losses: 5, goalsFor: 84, goalsAgainst: 38, goalDifference: 46 },
        { rank: 5, team: "첼시", games: 38, points: 70, wins: 21, draws: 7, losses: 10, goalsFor: 62, goalsAgainst: 38, goalDifference: 24 },
        { rank: 6, team: "아스널", games: 38, points: 63, wins: 19, draws: 6, losses: 13, goalsFor: 74, goalsAgainst: 51, goalDifference: 23 },
        { rank: 7, team: "번리", games: 38, points: 54, wins: 14, draws: 12, losses: 12, goalsFor: 36, goalsAgainst: 39, goalDifference: -3 },
        { rank: 8, team: "에버턴", games: 38, points: 49, wins: 13, draws: 10, losses: 15, goalsFor: 44, goalsAgainst: 58, goalDifference: -14 },
        { rank: 9, team: "레스터 시티", games: 38, points: 47, wins: 12, draws: 11, losses: 15, goalsFor: 56, goalsAgainst: 60, goalDifference: -4 },
        { rank: 10, team: "뉴캐슬 유나이티드", games: 38, points: 44, wins: 12, draws: 8, losses: 18, goalsFor: 39, goalsAgainst: 47, goalDifference: -8 },
        { rank: 11, team: "크리스탈 팰리스", games: 38, points: 44, wins: 11, draws: 11, losses: 16, goalsFor: 45, goalsAgainst: 55, goalDifference: -10 },
        { rank: 12, team: "본머스", games: 38, points: 44, wins: 11, draws: 11, losses: 16, goalsFor: 45, goalsAgainst: 61, goalDifference: -16 },
        { rank: 13, team: "웨스트햄 유나이티드", games: 38, points: 42, wins: 10, draws: 12, losses: 16, goalsFor: 48, goalsAgainst: 68, goalDifference: -20 },
        { rank: 14, team: "왓포드", games: 38, points: 41, wins: 11, draws: 8, losses: 19, goalsFor: 44, goalsAgainst: 64, goalDifference: -20 },
        { rank: 15, team: "브라이턴 앤 호브 알비온", games: 38, points: 40, wins: 9, draws: 13, losses: 16, goalsFor: 34, goalsAgainst: 54, goalDifference: -20 },
        { rank: 16, team: "허더즈필드 타운", games: 38, points: 37, wins: 9, draws: 10, losses: 19, goalsFor: 28, goalsAgainst: 58, goalDifference: -30 },
        { rank: 17, team: "사우샘프턴", games: 38, points: 36, wins: 7, draws: 15, losses: 16, goalsFor: 37, goalsAgainst: 56, goalDifference: -19 },
        { rank: 18, team: "스완지 시티", games: 38, points: 33, wins: 8, draws: 9, losses: 21, goalsFor: 28, goalsAgainst: 56, goalDifference: -28 },
        { rank: 19, team: "스토크 시티", games: 38, points: 33, wins: 7, draws: 12, losses: 19, goalsFor: 35, goalsAgainst: 68, goalDifference: -33 },
        { rank: 20, team: "웨스트 브로미치", games: 38, points: 31, wins: 6, draws: 13, losses: 19, goalsFor: 31, goalsAgainst: 56, goalDifference: -25 }
    ]

};

let currentSeason = "2023/24";

document.getElementById("prev-season").addEventListener("click", () => changeSeason("next"));
document.getElementById("next-season").addEventListener("click", () => changeSeason("prev"));

function changeSeason(direction) {
    const seasons = Object.keys(seasonsData);
    let currentIndex = seasons.indexOf(currentSeason);

    if (direction === "prev" && currentIndex > 0) {
        currentIndex--;
    } else if (direction === "next" && currentIndex < seasons.length - 1) {
        currentIndex++;
    }

    currentSeason = seasons[currentIndex];
    document.getElementById("season-title").innerText = `${currentSeason} 팀 순위`;
    updateTable();
}

function updateTable() {
    const standings = seasonsData[currentSeason];
    const tbody = document.getElementById("team-standings");
    tbody.innerHTML = "";

    standings.forEach(team => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${team.rank}</td>
            <td>${team.team}</td>
            <td>${team.games}</td>
            <td>${team.points}</td>
            <td>${team.wins}</td>
            <td>${team.draws}</td>
            <td>${team.losses}</td>
            <td>${team.goalsFor}</td>
            <td>${team.goalsAgainst}</td>
            <td>${team.goalDifference}</td>
        `;
        tbody.appendChild(row);
    });
}

updateTable();