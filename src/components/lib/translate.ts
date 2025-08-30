export const translations = {
    en: {
        navbar: {
            title: ['home', 'about', 'skills', 'projects', 'contact'],
        },
        hero: {
            name: 'Ziba Nouri',
            front: 'Frontend Developer',
            hello: 'Hello friends',
            work: 'View My Work',
            touch: 'Get In Touch',
        },
        sidebar: {
            mode: 'Mode',
            theme: 'Theme',
            language: 'Language',
        },
        about: {
            story: 'My Story',
            iDo: 'What I Do',
        },
    },
    de: {
        navbar: {
            title: [
                'Startseite',
                'Über mich',
                'Fähigkeiten',
                'Projekte',
                'Kontakt',
            ],
        },
        hero: {
            name: 'Ziba Nouri',
            front: 'Frontend-Entwicklerin',
            hello: 'Hallo zusammen',
            work: 'Meine Arbeiten ansehen',
            touch: 'Kontakt aufnehmen',
        },
        sidebar: {
            mode: 'Modus',
            theme: 'Thema',
            language: 'Sprache',
        },
        about: {
            story: 'Meine Geschichte',
            iDo: 'Was ich mache',
        },
    },
    ja: {
        navbar: {
            title: ['ホーム', '紹介', 'スキル', 'プロジェクト', '連絡先'],
        },
        hero: {
            name: 'ジーバ・ヌーリ',
            front: 'フロントエンド開発者',
            hello: 'こんにちは',
            work: '作品を見る',
            touch: 'お問い合わせ',
        },
        sidebar: {
            mode: 'モード',
            theme: 'テーマ',
            language: '言語',
        },
        about: {
            story: '私の物語',
            iDo: '私がしていること',
        },
    },
} as const;

export type Language = keyof typeof translations;
