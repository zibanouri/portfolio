export const translations = {
    en: {
        navbar: {
            title: [
                'home',
                'about',
                'skills',
                'projects',
                'contact',
            ]
        },
        hero: {
            name: "Ziba Nouri",
            front: "Frontend Developer",
            hello: "Hello friends",
            work: "View My Work",
            touch: "Get In Touch",
        },
        sidebar: {
            mode: "Mode",
            theme: "Theme",
            language: "Language"
        }
    },
    de: {
        navbar: {
            title: [
                'Startseite',   // home
                'Über mich',    // about
                'Fähigkeiten',  // skills
                'Projekte',     // projects
                'Kontakt',      // contact
            ]
        },
        hero: {
            name: "Ziba Nouri",
            front: "Frontend-Entwicklerin",
            hello: "Hallo zusammen",
            work: "Meine Arbeiten ansehen",
            touch: "Kontakt aufnehmen",
        },
        sidebar: {
            mode: "Modus",
            theme: "Thema",
            language: "Sprache"
        }
    },
    ja: {
        navbar: {
            title: [
                'ホーム',      // home
                '紹介',        // about
                'スキル',      // skills
                'プロジェクト', // projects
                '連絡先',      // contact
            ]
        },
        hero: {
            name: "ジーバ・ヌーリ",
            front: "フロントエンド開発者",
            hello: "こんにちは",
            work: "作品を見る",
            touch: "お問い合わせ",
        },
        sidebar: {
            mode: "モード",
            theme: "テーマ",
            language: "言語"
        }
    },
} as const;

export type Language = keyof typeof translations;