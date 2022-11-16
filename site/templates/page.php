<?php snippet('header') ?>

<main>
    <?php

$offset = "2";
$chunks = array(
    'one' => $site->pages()->limit($offset),
    'two' => $site->pages()->offset($offset),
);

foreach ($chunks as $key => $items) : ?>
    $items = $site->structure()->toStructure();
    ?>

    <ul class="<?= $key ?>">


        <?php
        foreach ($items as $item) : ?>
            <li id="<?= $item->action()->html() ?> ">
                <h2 class="title"><?= $item->action()->html() ?> </h2>
                <article class="caption"> </article>
                <div class="images">
                    <div class="swiper">
                        <!-- Additional required wrapper -->
                        <div class="swiper-wrapper">
                            <!-- Slides -->
                            <?php foreach ($site->find('projets')->children()->filterBy('category', $item->action())->images() as $image) : ?>
                                <div class="swiper-slide">
                                    <img data-title="<?= $image->parent()->title() ?>" data-caption="<?= $image->caption() ?>" src="<?= $image->url() ?>" alt="">
                                </div>
                            <?php endforeach ?>
                        </div>
                        <!-- If we need pagination -->
                        <div class="swiper-pagination"></div>

                        <!-- If we need navigation buttons -->
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
                    </div>
                </div>
            </li>
        <?php endforeach ?>



    </ul>

</main>
