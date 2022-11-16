<?php $about = $site->find("a-propos") ?>
<li class=" <?= $about->id() ?>">

    <h2 data-url="<?= str::slug($about->title()) ?>" id="id<?= $about->indexOf() ?>" class="title" onclick="openPage(this)"><?= $about->title() ?></h2>
    <div class="content">
        <section class="biographie">
            <div class="b-left">

                <?= $about->description()->kirbyText() ?>
            </div>
            <div class="b-center">
                <p>écrire</p>
                <?= $about->mail()->toLink() ?><br>
                <p>voir</p>
                <a href="<?= $about->instagram() ?>">instagram</a>
                <p>relire</p>
            </div>
            <div class="b-right">
                <?= $about->liens()->kirbyText() ?>
                <p>imprimer, relire encore, et puis,
                    lire aux autres</p>
            </div>
        </section>
    </div>
</li>