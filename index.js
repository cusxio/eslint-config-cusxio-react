'use strict';

module.exports = {
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.json'],
            },
        },
        'react': {
            pragma: 'React',
            version: '15.0',
        },
    },
    plugins: ['react'],
    rules: {
        'react/display-name': 0,
        'react/forbid-component-props': 0,
        'react/forbid-prop-types': [
            0, {
                forbid: ['any', 'array', 'object'],
            },
        ],
        'react/jsx-boolean-value': [2, 'never'],
        'react/jsx-closing-bracket-location': [
            2, 'tag-aligned',
        ],
        'react/jsx-curly-spacing': [
            2, 'never',
        ],
        'react/jsx-equals-spacing': [
            2, 'never',
        ],
        'react/jsx-filename-extension': 0,
        'react/jsx-first-prop-new-line': [
            2, 'multiline',
        ],
        'react/jsx-handler-names': [2, {
            eventHandlerPrefix: 'handle',
            eventHandlerPropPrefix: 'on',
        }],
        'react/jsx-indent-props': [
            2, 4,
        ],
        'react/jsx-indent': [
            2, 4,
        ],
        'react/jsx-key': 2,
        'react/jsx-max-props-per-line': [0, { maximum: 1 }],
        'react/jsx-no-bind': [
            2, {
                ignoreRefs: true,
                allowArrowFunctions: true,
                allowBind: false,
            },
        ],
        'react/jsx-no-comment-textnodes': 2,
        'react/jsx-no-duplicate-props': [
            2, {
                ignoreCase: true,
            },
        ],
        'react/jsx-no-literals': 0,
        'react/jsx-no-target-blank': 2,
        'react/jsx-no-undef': 2,
        'react/jsx-pascal-case': [2, {
            allowAllCaps: true,
        }],
        'react/jsx-sort-prop-types': 0,
        'react/jsx-space-before-closing': [
            2, 'always',
        ],
        'react/jsx-tag-spacing': [2, {
            closingSlash: 'never',
            beforeSelfClosing: 'always',
            afterOpening: 'never',
        }],
        'react/jsx-uses-react': 2,
        'react/jsx-uses-vars': 2,
        'react/jsx-wrap-multilines': [2, {
            declaration: true,
            assignment: true,
            return: true,
        }],
        // 'react/no-array-index-key': 2,
        'react/no-children-prop': 2,
        'react/no-danger-with-children': 2,
        'react/no-danger': 2,
        'react/no-deprecated': 2,
        'react/no-did-mount-set-state': 2,
        'react/no-did-update-set-state': 2,
        'react/no-direct-mutation-state': 2,
        'react/no-find-dom-node': 2,
        'react/no-is-mounted': 2,
        'react/no-multi-comp': [
            2, {
                ignoreStateless: true,
            },
        ],
        'react/no-render-return-value': 2,
        'react/no-set-state': 0,
        'react/no-string-refs': 2,
        'react/no-unescaped-entities': 2,
        'react/no-unknown-property': 2,
        'react/no-unused-prop-types': 2,
        'react/prefer-es6-class': [2, 'always'],
        'react/prefer-stateless-function': 2,
        'react/prop-types': 2,
        'react/react-in-jsx-scope': 2,
        // 'react/require-default-props': 0,
        'react/require-extension': 0,
        'react/require-optimization': 0,
        'react/require-render-return': 2,
        'react/self-closing-comp': 2,
        'react/sort-comp': 0,
        'react/sort-prop-types': 0,
        'react/style-prop-object': 2,
    },
};
