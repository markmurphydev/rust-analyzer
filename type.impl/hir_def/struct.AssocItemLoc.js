(function() {
    var type_impls = Object.fromEntries([["hir_def",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-AssocItemLoc%3CN%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hir_def/lib.rs.html#154-158\">source</a><a href=\"#impl-Clone-for-AssocItemLoc%3CN%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;N: <a class=\"trait\" href=\"hir_def/item_tree/trait.ItemTreeNode.html\" title=\"trait hir_def::item_tree::ItemTreeNode\">ItemTreeNode</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"hir_def/struct.AssocItemLoc.html\" title=\"struct hir_def::AssocItemLoc\">AssocItemLoc</a>&lt;N&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hir_def/lib.rs.html#155-157\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.82.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; Self</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.82.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.82.0/src/core/clone.rs.html#174\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.82.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.82.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","hir_def::StaticLoc"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-AssocItemLoc%3CN%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hir_def/lib.rs.html#148\">source</a><a href=\"#impl-Debug-for-AssocItemLoc%3CN%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;N: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"hir_def/item_tree/trait.ItemTreeNode.html\" title=\"trait hir_def::item_tree::ItemTreeNode\">ItemTreeNode</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"hir_def/struct.AssocItemLoc.html\" title=\"struct hir_def::AssocItemLoc\">AssocItemLoc</a>&lt;N&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hir_def/lib.rs.html#148\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.82.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.82.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.82.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.82.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","hir_def::StaticLoc"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Hash-for-AssocItemLoc%3CN%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hir_def/lib.rs.html#170-175\">source</a><a href=\"#impl-Hash-for-AssocItemLoc%3CN%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;N: <a class=\"trait\" href=\"hir_def/item_tree/trait.ItemTreeNode.html\" title=\"trait hir_def::item_tree::ItemTreeNode\">ItemTreeNode</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"hir_def/struct.AssocItemLoc.html\" title=\"struct hir_def::AssocItemLoc\">AssocItemLoc</a>&lt;N&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hir_def/lib.rs.html#171-174\">source</a><a href=\"#method.hash\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.82.0/core/hash/trait.Hash.html#tymethod.hash\" class=\"fn\">hash</a>&lt;H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>&gt;(&amp;self, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.reference.html\">&amp;mut H</a>)</h4></section></summary><div class='docblock'>Feeds this value into the given <a href=\"https://doc.rust-lang.org/1.82.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/1.82.0/core/hash/trait.Hash.html#tymethod.hash\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash_slice\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.3.0\">1.3.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.82.0/src/core/hash/mod.rs.html#235-237\">source</a></span><a href=\"#method.hash_slice\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.82.0/core/hash/trait.Hash.html#method.hash_slice\" class=\"fn\">hash_slice</a>&lt;H&gt;(data: &amp;[Self], state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.reference.html\">&amp;mut H</a>)<div class=\"where\">where\n    H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Feeds a slice of this type into the given <a href=\"https://doc.rust-lang.org/1.82.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/1.82.0/core/hash/trait.Hash.html#method.hash_slice\">Read more</a></div></details></div></details>","Hash","hir_def::StaticLoc"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-AssocItemLoc%3CN%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hir_def/lib.rs.html#162-166\">source</a><a href=\"#impl-PartialEq-for-AssocItemLoc%3CN%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;N: <a class=\"trait\" href=\"hir_def/item_tree/trait.ItemTreeNode.html\" title=\"trait hir_def::item_tree::ItemTreeNode\">ItemTreeNode</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"hir_def/struct.AssocItemLoc.html\" title=\"struct hir_def::AssocItemLoc\">AssocItemLoc</a>&lt;N&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hir_def/lib.rs.html#163-165\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.82.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;Self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests for <code>self</code> and <code>other</code> values to be equal, and is used by <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.82.0/src/core/cmp.rs.html#261\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.82.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests for <code>!=</code>. The default implementation is almost always sufficient,\nand should not be overridden without very good reason.</div></details></div></details>","PartialEq","hir_def::StaticLoc"],["<section id=\"impl-Copy-for-AssocItemLoc%3CN%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hir_def/lib.rs.html#160\">source</a><a href=\"#impl-Copy-for-AssocItemLoc%3CN%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;N: <a class=\"trait\" href=\"hir_def/item_tree/trait.ItemTreeNode.html\" title=\"trait hir_def::item_tree::ItemTreeNode\">ItemTreeNode</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"hir_def/struct.AssocItemLoc.html\" title=\"struct hir_def::AssocItemLoc\">AssocItemLoc</a>&lt;N&gt;</h3></section>","Copy","hir_def::StaticLoc"],["<section id=\"impl-Eq-for-AssocItemLoc%3CN%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hir_def/lib.rs.html#168\">source</a><a href=\"#impl-Eq-for-AssocItemLoc%3CN%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;N: <a class=\"trait\" href=\"hir_def/item_tree/trait.ItemTreeNode.html\" title=\"trait hir_def::item_tree::ItemTreeNode\">ItemTreeNode</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"hir_def/struct.AssocItemLoc.html\" title=\"struct hir_def::AssocItemLoc\">AssocItemLoc</a>&lt;N&gt;</h3></section>","Eq","hir_def::StaticLoc"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[10946]}