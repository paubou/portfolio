<?php
Kirby::plugin('my/page-methods', [
    'pageMethods' => [
        'getListOfSiblingsWithCategory' => function () {
            $html = '<ul>';

            foreach ($this->siblings(false)->filterBy('category', $this->category()) as $page) {
                $html .= '<li>' . Html::a($page->panel()->url(), $page->title()) . '</li>';
            }
            $html .= '</ul>';

            return $html;
        }
    ]
]);
