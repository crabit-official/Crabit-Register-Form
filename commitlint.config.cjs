module.exports = {
  extends: [],
  rules: {
    'header-min-length': [2, 'always', 20],
    'header-case-start-capital': [2, 'always'],
    'header-end-period': [2, 'always'],
  },
  plugins: [
    {
      rules: {
        'header-case-start-capital': ({ raw }) => {
          return [
            /^[A-Z]/.test(raw),
            'Commit Message Must Start With A Capital Letter',
          ];
        },
        'header-end-period': ({ header }) => {
          return [/\.$/.test(header), 'Commit Message Must End With A Period'];
        },
      },
    },
  ],
};
