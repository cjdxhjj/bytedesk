"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[23,4441,8600,4514],{74441:function(e,n,a){a.r(n);var t=a(96840),i=a(6014),r=a(62918),l=a(98133);const p=Object.freeze(JSON.parse('{"displayName":"GraphQL","fileTypes":["graphql","graphqls","gql","graphcool"],"name":"graphql","patterns":[{"include":"#graphql"}],"repository":{"graphql":{"patterns":[{"include":"#graphql-comment"},{"include":"#graphql-description-docstring"},{"include":"#graphql-description-singleline"},{"include":"#graphql-fragment-definition"},{"include":"#graphql-directive-definition"},{"include":"#graphql-type-interface"},{"include":"#graphql-enum"},{"include":"#graphql-scalar"},{"include":"#graphql-union"},{"include":"#graphql-schema"},{"include":"#graphql-operation-def"},{"include":"#literal-quasi-embedded"}]},"graphql-ampersand":{"captures":{"1":{"name":"keyword.operator.logical.graphql"}},"match":"\\\\s*(&)"},"graphql-arguments":{"begin":"\\\\s*(\\\\()","beginCaptures":{"1":{"name":"meta.brace.round.directive.graphql"}},"end":"\\\\s*(\\\\))","endCaptures":{"1":{"name":"meta.brace.round.directive.graphql"}},"name":"meta.arguments.graphql","patterns":[{"include":"#graphql-comment"},{"include":"#graphql-description-docstring"},{"include":"#graphql-description-singleline"},{"begin":"\\\\s*([_A-Za-z][_0-9A-Za-z]*)(?:\\\\s*(:))","beginCaptures":{"1":{"name":"variable.parameter.graphql"},"2":{"name":"punctuation.colon.graphql"}},"end":"(?=\\\\s*(?:(?:([_A-Za-z][_0-9A-Za-z]*)\\\\s*(:))|\\\\)))|\\\\s*(,)","endCaptures":{"3":{"name":"punctuation.comma.graphql"}},"patterns":[{"include":"#graphql-comment"},{"include":"#graphql-description-docstring"},{"include":"#graphql-description-singleline"},{"include":"#graphql-directive"},{"include":"#graphql-value"},{"include":"#graphql-skip-newlines"}]},{"include":"#literal-quasi-embedded"}]},"graphql-boolean-value":{"captures":{"1":{"name":"constant.language.boolean.graphql"}},"match":"\\\\s*\\\\b(true|false)\\\\b"},"graphql-colon":{"captures":{"1":{"name":"punctuation.colon.graphql"}},"match":"\\\\s*(:)"},"graphql-comma":{"captures":{"1":{"name":"punctuation.comma.graphql"}},"match":"\\\\s*(,)"},"graphql-comment":{"patterns":[{"captures":{"1":{"name":"punctuation.whitespace.comment.leading.graphql"}},"comment":"need to prefix comment space with a scope else Atom\'s reflow cmd doesn\'t work","match":"(\\\\s*)(#).*","name":"comment.line.graphql.js"},{"begin":"(\\"\\"\\")","beginCaptures":{"1":{"name":"punctuation.whitespace.comment.leading.graphql"}},"end":"(\\"\\"\\")","name":"comment.line.graphql.js"},{"begin":"(\\")","beginCaptures":{"1":{"name":"punctuation.whitespace.comment.leading.graphql"}},"end":"(\\")","name":"comment.line.graphql.js"}]},"graphql-description-docstring":{"begin":"\\"\\"\\"","end":"\\"\\"\\"","name":"comment.block.graphql"},"graphql-description-singleline":{"match":"#(?=([^\\"]*\\"[^\\"]*\\")*[^\\"]*$).*$","name":"comment.line.number-sign.graphql"},"graphql-directive":{"applyEndPatternLast":1,"begin":"\\\\s*((@)\\\\s*([_A-Za-z][_0-9A-Za-z]*))","beginCaptures":{"1":{"name":"entity.name.function.directive.graphql"}},"end":"(?=.)","patterns":[{"include":"#graphql-comment"},{"include":"#graphql-description-docstring"},{"include":"#graphql-description-singleline"},{"include":"#graphql-arguments"},{"include":"#literal-quasi-embedded"},{"include":"#graphql-skip-newlines"}]},"graphql-directive-definition":{"applyEndPatternLast":1,"begin":"\\\\s*(\\\\bdirective\\\\b)\\\\s*(@[_A-Za-z][_0-9A-Za-z]*)","beginCaptures":{"1":{"name":"keyword.directive.graphql"},"2":{"name":"entity.name.function.directive.graphql"},"3":{"name":"keyword.on.graphql"},"4":{"name":"support.type.graphql"}},"end":"(?=.)","patterns":[{"include":"#graphql-variable-definitions"},{"applyEndPatternLast":1,"begin":"\\\\s*(\\\\bon\\\\b)\\\\s*([_A-Za-z]*)","beginCaptures":{"1":{"name":"keyword.on.graphql"},"2":{"name":"support.type.location.graphql"}},"end":"(?=.)","patterns":[{"include":"#graphql-skip-newlines"},{"include":"#graphql-comment"},{"include":"#literal-quasi-embedded"},{"captures":{"2":{"name":"support.type.location.graphql"}},"match":"\\\\s*(\\\\|)\\\\s*([_A-Za-z]*)"}]},{"include":"#graphql-skip-newlines"},{"include":"#graphql-comment"},{"include":"#literal-quasi-embedded"}]},"graphql-enum":{"begin":"\\\\s*+\\\\b(enum)\\\\b\\\\s*([_A-Za-z][_0-9A-Za-z]*)","beginCaptures":{"1":{"name":"keyword.enum.graphql"},"2":{"name":"support.type.enum.graphql"}},"end":"(?<=})","name":"meta.enum.graphql","patterns":[{"begin":"\\\\s*({)","beginCaptures":{"1":{"name":"punctuation.operation.graphql"}},"end":"\\\\s*(})","endCaptures":{"1":{"name":"punctuation.operation.graphql"}},"name":"meta.type.object.graphql","patterns":[{"include":"#graphql-object-type"},{"include":"#graphql-comment"},{"include":"#graphql-description-docstring"},{"include":"#graphql-description-singleline"},{"include":"#graphql-directive"},{"include":"#graphql-enum-value"},{"include":"#literal-quasi-embedded"}]},{"include":"#graphql-comment"},{"include":"#graphql-description-docstring"},{"include":"#graphql-description-singleline"},{"include":"#graphql-directive"}]},"graphql-enum-value":{"match":"\\\\s*(?!=\\\\b(true|false|null)\\\\b)([_A-Za-z][_0-9A-Za-z]*)","name":"constant.character.enum.graphql"},"graphql-field":{"patterns":[{"captures":{"1":{"name":"string.unquoted.alias.graphql"},"2":{"name":"punctuation.colon.graphql"}},"match":"\\\\s*([_A-Za-z][_0-9A-Za-z]*)\\\\s*(:)"},{"captures":{"1":{"name":"variable.graphql"}},"match":"\\\\s*([_A-Za-z][_0-9A-Za-z]*)"},{"include":"#graphql-arguments"},{"include":"#graphql-directive"},{"include":"#graphql-selection-set"},{"include":"#literal-quasi-embedded"},{"include":"#graphql-skip-newlines"}]},"graphql-float-value":{"captures":{"1":{"name":"constant.numeric.float.graphql"}},"match":"\\\\s*(-?(0|[1-9]\\\\d*)(\\\\.\\\\d+)?((e|E)(\\\\+|-)?\\\\d+)?)"},"graphql-fragment-definition":{"begin":"\\\\s*(?:(\\\\bfragment\\\\b)\\\\s*([_A-Za-z][_0-9A-Za-z]*)?\\\\s*(?:(\\\\bon\\\\b)\\\\s*([_A-Za-z][_0-9A-Za-z]*)))","captures":{"1":{"name":"keyword.fragment.graphql"},"2":{"name":"entity.name.fragment.graphql"},"3":{"name":"keyword.on.graphql"},"4":{"name":"support.type.graphql"}},"end":"(?<=})","name":"meta.fragment.graphql","patterns":[{"include":"#graphql-comment"},{"include":"#graphql-description-docstring"},{"include":"#graphql-description-singleline"},{"include":"#graphql-selection-set"},{"include":"#graphql-directive"},{"include":"#graphql-skip-newlines"},{"include":"#literal-quasi-embedded"}]},"graphql-fragment-spread":{"applyEndPatternLast":1,"begin":"\\\\s*(\\\\.\\\\.\\\\.)\\\\s*(?!\\\\bon\\\\b)([_A-Za-z][_0-9A-Za-z]*)","captures":{"1":{"name":"keyword.operator.spread.graphql"},"2":{"name":"variable.fragment.graphql"}},"end":"(?=.)","patterns":[{"include":"#graphql-comment"},{"include":"#graphql-description-docstring"},{"include":"#graphql-description-singleline"},{"include":"#graphql-selection-set"},{"include":"#graphql-directive"},{"include":"#literal-quasi-embedded"},{"include":"#graphql-skip-newlines"}]},"graphql-ignore-spaces":{"match":"\\\\s*"},"graphql-inline-fragment":{"applyEndPatternLast":1,"begin":"\\\\s*(\\\\.\\\\.\\\\.)\\\\s*(?:(\\\\bon\\\\b)\\\\s*([_A-Za-z][_0-9A-Za-z]*))?","captures":{"1":{"name":"keyword.operator.spread.graphql"},"2":{"name":"keyword.on.graphql"},"3":{"name":"support.type.graphql"}},"end":"(?=.)","patterns":[{"include":"#graphql-comment"},{"include":"#graphql-description-docstring"},{"include":"#graphql-description-singleline"},{"include":"#graphql-selection-set"},{"include":"#graphql-directive"},{"include":"#graphql-skip-newlines"},{"include":"#literal-quasi-embedded"}]},"graphql-input-types":{"patterns":[{"include":"#graphql-scalar-type"},{"captures":{"1":{"name":"support.type.graphql"},"2":{"name":"keyword.operator.nulltype.graphql"}},"match":"\\\\s*([_A-Za-z][_0-9A-Za-z]*)(?:\\\\s*(!))?"},{"begin":"\\\\s*(\\\\[)","captures":{"1":{"name":"meta.brace.square.graphql"},"2":{"name":"keyword.operator.nulltype.graphql"}},"end":"\\\\s*(\\\\])(?:\\\\s*(!))?","name":"meta.type.list.graphql","patterns":[{"include":"#graphql-comment"},{"include":"#graphql-description-docstring"},{"include":"#graphql-description-singleline"},{"include":"#graphql-input-types"},{"include":"#graphql-comma"},{"include":"#literal-quasi-embedded"}]}]},"graphql-list-value":{"patterns":[{"begin":"\\\\s*+(\\\\[)","beginCaptures":{"1":{"name":"meta.brace.square.graphql"}},"end":"\\\\s*(\\\\])","endCaptures":{"1":{"name":"meta.brace.square.graphql"}},"name":"meta.listvalues.graphql","patterns":[{"include":"#graphql-value"}]}]},"graphql-name":{"captures":{"1":{"name":"entity.name.function.graphql"}},"match":"\\\\s*([_A-Za-z][_0-9A-Za-z]*)"},"graphql-null-value":{"captures":{"1":{"name":"constant.language.null.graphql"}},"match":"\\\\s*\\\\b(null)\\\\b"},"graphql-object-field":{"captures":{"1":{"name":"constant.object.key.graphql"},"2":{"name":"string.unquoted.graphql"},"3":{"name":"punctuation.graphql"}},"match":"\\\\s*(([_A-Za-z][_0-9A-Za-z]*))\\\\s*(:)"},"graphql-object-value":{"patterns":[{"begin":"\\\\s*+({)","beginCaptures":{"1":{"name":"meta.brace.curly.graphql"}},"end":"\\\\s*(})","endCaptures":{"1":{"name":"meta.brace.curly.graphql"}},"name":"meta.objectvalues.graphql","patterns":[{"include":"#graphql-object-field"},{"include":"#graphql-value"}]}]},"graphql-operation-def":{"patterns":[{"include":"#graphql-query-mutation"},{"include":"#graphql-name"},{"include":"#graphql-variable-definitions"},{"include":"#graphql-directive"},{"include":"#graphql-selection-set"}]},"graphql-query-mutation":{"captures":{"1":{"name":"keyword.operation.graphql"}},"match":"\\\\s*\\\\b(query|mutation)\\\\b"},"graphql-scalar":{"captures":{"1":{"name":"keyword.scalar.graphql"},"2":{"name":"entity.scalar.graphql"}},"match":"\\\\s*\\\\b(scalar)\\\\b\\\\s*([_A-Za-z][_0-9A-Za-z]*)"},"graphql-scalar-type":{"captures":{"1":{"name":"support.type.builtin.graphql"},"2":{"name":"keyword.operator.nulltype.graphql"}},"match":"\\\\s*\\\\b(Int|Float|String|Boolean|ID)\\\\b(?:\\\\s*(!))?"},"graphql-schema":{"begin":"\\\\s*\\\\b(schema)\\\\b","beginCaptures":{"1":{"name":"keyword.schema.graphql"}},"end":"(?<=})","patterns":[{"begin":"\\\\s*({)","beginCaptures":{"1":{"name":"punctuation.operation.graphql"}},"end":"\\\\s*(})","endCaptures":{"1":{"name":"punctuation.operation.graphql"}},"patterns":[{"begin":"\\\\s*([_A-Za-z][_0-9A-Za-z]*)(?=\\\\s*\\\\(|:)","beginCaptures":{"1":{"name":"variable.arguments.graphql"}},"end":"(?=\\\\s*(([_A-Za-z][_0-9A-Za-z]*)\\\\s*(\\\\(|:)|(})))|\\\\s*(,)","endCaptures":{"5":{"name":"punctuation.comma.graphql"}},"patterns":[{"captures":{"1":{"name":"support.type.graphql"}},"match":"\\\\s*([_A-Za-z][_0-9A-Za-z]*)"},{"include":"#graphql-comment"},{"include":"#graphql-description-docstring"},{"include":"#graphql-description-singleline"},{"include":"#graphql-colon"},{"include":"#graphql-skip-newlines"}]},{"include":"#graphql-comment"},{"include":"#graphql-description-docstring"},{"include":"#graphql-description-singleline"},{"include":"#graphql-skip-newlines"}]},{"include":"#graphql-comment"},{"include":"#graphql-description-docstring"},{"include":"#graphql-description-singleline"},{"include":"#graphql-directive"},{"include":"#graphql-skip-newlines"}]},"graphql-selection-set":{"begin":"\\\\s*({)","beginCaptures":{"1":{"name":"punctuation.operation.graphql"}},"end":"\\\\s*(})","endCaptures":{"1":{"name":"punctuation.operation.graphql"}},"name":"meta.selectionset.graphql","patterns":[{"include":"#graphql-comment"},{"include":"#graphql-description-docstring"},{"include":"#graphql-description-singleline"},{"include":"#graphql-field"},{"include":"#graphql-fragment-spread"},{"include":"#graphql-inline-fragment"},{"include":"#graphql-comma"},{"include":"#native-interpolation"},{"include":"#literal-quasi-embedded"}]},"graphql-skip-newlines":{"match":"\\\\s*\\n"},"graphql-string-content":{"patterns":[{"match":"\\\\\\\\[/\'\\"\\\\\\\\nrtbf]","name":"constant.character.escape.graphql"},{"match":"\\\\\\\\u([0-9a-fA-F]{4})","name":"constant.character.escape.graphql"}]},"graphql-string-value":{"begin":"\\\\s*+((\\"))","beginCaptures":{"1":{"name":"string.quoted.double.graphql"},"2":{"name":"punctuation.definition.string.begin.graphql"}},"contentName":"string.quoted.double.graphql","end":"\\\\s*+(?:((\\"))|(\\n))","endCaptures":{"1":{"name":"string.quoted.double.graphql"},"2":{"name":"punctuation.definition.string.end.graphql"},"3":{"name":"invalid.illegal.newline.graphql"}},"patterns":[{"include":"#graphql-string-content"},{"include":"#literal-quasi-embedded"}]},"graphql-type-definition":{"begin":"\\\\s*([_A-Za-z][_0-9A-Za-z]*)(?=\\\\s*\\\\(|:)","beginCaptures":{"1":{"name":"variable.graphql"}},"comment":"key (optionalArgs): Type","end":"(?=\\\\s*(([_A-Za-z][_0-9A-Za-z]*)\\\\s*(\\\\(|:)|(})))|\\\\s*(,)","endCaptures":{"5":{"name":"punctuation.comma.graphql"}},"patterns":[{"include":"#graphql-comment"},{"include":"#graphql-description-docstring"},{"include":"#graphql-description-singleline"},{"include":"#graphql-directive"},{"include":"#graphql-variable-definitions"},{"include":"#graphql-type-object"},{"include":"#graphql-colon"},{"include":"#graphql-input-types"},{"include":"#literal-quasi-embedded"}]},"graphql-type-interface":{"applyEndPatternLast":1,"begin":"\\\\s*\\\\b(?:(extends?)?\\\\b\\\\s*\\\\b(type)|(interface)|(input))\\\\b\\\\s*([_A-Za-z][_0-9A-Za-z]*)?","captures":{"1":{"name":"keyword.type.graphql"},"2":{"name":"keyword.type.graphql"},"3":{"name":"keyword.interface.graphql"},"4":{"name":"keyword.input.graphql"},"5":{"name":"support.type.graphql"}},"end":"(?=.)","name":"meta.type.interface.graphql","patterns":[{"begin":"\\\\s*\\\\b(implements)\\\\b\\\\s*","beginCaptures":{"1":{"name":"keyword.implements.graphql"}},"end":"\\\\s*(?={)","patterns":[{"captures":{"1":{"name":"support.type.graphql"}},"match":"\\\\s*([_A-Za-z][_0-9A-Za-z]*)"},{"include":"#graphql-comment"},{"include":"#graphql-description-docstring"},{"include":"#graphql-description-singleline"},{"include":"#graphql-directive"},{"include":"#graphql-ampersand"},{"include":"#graphql-comma"}]},{"include":"#graphql-comment"},{"include":"#graphql-description-docstring"},{"include":"#graphql-description-singleline"},{"include":"#graphql-directive"},{"include":"#graphql-type-object"},{"include":"#literal-quasi-embedded"},{"include":"#graphql-ignore-spaces"}]},"graphql-type-object":{"begin":"\\\\s*({)","beginCaptures":{"1":{"name":"punctuation.operation.graphql"}},"end":"\\\\s*(})","endCaptures":{"1":{"name":"punctuation.operation.graphql"}},"name":"meta.type.object.graphql","patterns":[{"include":"#graphql-comment"},{"include":"#graphql-description-docstring"},{"include":"#graphql-description-singleline"},{"include":"#graphql-object-type"},{"include":"#graphql-type-definition"},{"include":"#literal-quasi-embedded"}]},"graphql-union":{"applyEndPatternLast":1,"begin":"\\\\s*\\\\b(union)\\\\b\\\\s*([_A-Za-z][_0-9A-Za-z]*)","captures":{"1":{"name":"keyword.union.graphql"},"2":{"name":"support.type.graphql"}},"end":"(?=.)","patterns":[{"applyEndPatternLast":1,"begin":"\\\\s*(=)\\\\s*([_A-Za-z][_0-9A-Za-z]*)","captures":{"1":{"name":"punctuation.assignment.graphql"},"2":{"name":"support.type.graphql"}},"end":"(?=.)","patterns":[{"include":"#graphql-comment"},{"include":"#graphql-description-docstring"},{"include":"#graphql-description-singleline"},{"include":"#graphql-skip-newlines"},{"include":"#literal-quasi-embedded"},{"captures":{"1":{"name":"punctuation.or.graphql"},"2":{"name":"support.type.graphql"}},"match":"\\\\s*(\\\\|)\\\\s*([_A-Za-z][_0-9A-Za-z]*)"}]},{"include":"#graphql-comment"},{"include":"#graphql-description-docstring"},{"include":"#graphql-description-singleline"},{"include":"#graphql-skip-newlines"},{"include":"#literal-quasi-embedded"}]},"graphql-union-mark":{"captures":{"1":{"name":"punctuation.union.graphql"}},"match":"\\\\s*(\\\\|)"},"graphql-value":{"patterns":[{"include":"#graphql-comment"},{"include":"#graphql-description-docstring"},{"include":"#graphql-variable-name"},{"include":"#graphql-float-value"},{"include":"#graphql-string-value"},{"include":"#graphql-boolean-value"},{"include":"#graphql-null-value"},{"include":"#graphql-enum-value"},{"include":"#graphql-list-value"},{"include":"#graphql-object-value"},{"include":"#literal-quasi-embedded"}]},"graphql-variable-assignment":{"applyEndPatternLast":1,"begin":"\\\\s(=)","beginCaptures":{"1":{"name":"punctuation.assignment.graphql"}},"end":"(?=[\\n,)])","patterns":[{"include":"#graphql-value"}]},"graphql-variable-definition":{"begin":"\\\\s*(\\\\$?[_A-Za-z][_0-9A-Za-z]*)(?=\\\\s*\\\\(|:)","beginCaptures":{"1":{"name":"variable.parameter.graphql"}},"comment":"variable: type = value,.... which may be a list","end":"(?=\\\\s*((\\\\$?[_A-Za-z][_0-9A-Za-z]*)\\\\s*(\\\\(|:)|(}|\\\\))))|\\\\s*(,)","endCaptures":{"5":{"name":"punctuation.comma.graphql"}},"name":"meta.variables.graphql","patterns":[{"include":"#graphql-comment"},{"include":"#graphql-description-docstring"},{"include":"#graphql-description-singleline"},{"include":"#graphql-directive"},{"include":"#graphql-colon"},{"include":"#graphql-input-types"},{"include":"#graphql-variable-assignment"},{"include":"#literal-quasi-embedded"},{"include":"#graphql-skip-newlines"}]},"graphql-variable-definitions":{"begin":"\\\\s*(\\\\()","captures":{"1":{"name":"meta.brace.round.graphql"}},"end":"\\\\s*(\\\\))","patterns":[{"include":"#graphql-comment"},{"include":"#graphql-description-docstring"},{"include":"#graphql-description-singleline"},{"include":"#graphql-variable-definition"},{"include":"#literal-quasi-embedded"}]},"graphql-variable-name":{"captures":{"1":{"name":"variable.graphql"}},"match":"\\\\s*(\\\\$[_A-Za-z][_0-9A-Za-z]*)"},"native-interpolation":{"begin":"\\\\s*(\\\\${)","beginCaptures":{"1":{"name":"keyword.other.substitution.begin"}},"end":"(})","endCaptures":{"1":{"name":"keyword.other.substitution.end"}},"name":"native.interpolation","patterns":[{"include":"source.js"},{"include":"source.ts"},{"include":"source.js.jsx"},{"include":"source.tsx"}]}},"scopeName":"source.graphql","embeddedLangs":["javascript","typescript","jsx","tsx"],"aliases":["gql"]}'));n.default=[...t.default,...i.default,...r.default,...l.default,p]},80023:function(e,n,a){a.r(n);var t=a(72258),i=a(81497),r=a(94514),l=a(74441);const p=Object.freeze(JSON.parse('{"displayName":"HTTP","fileTypes":["http","rest"],"name":"http","patterns":[{"begin":"^\\\\s*(?=curl)","end":"^\\\\s*(\\\\#{3,}.*?)?\\\\s*$","endCaptures":{"0":{"name":"comment.line.sharp.http"}},"name":"http.request.curl","patterns":[{"include":"source.shell"}]},{"begin":"\\\\s*(?=(\\\\[|{[^{]))","end":"^\\\\s*(\\\\#{3,}.*?)?\\\\s*$","endCaptures":{"0":{"name":"comment.line.sharp.http"}},"name":"http.request.body.json","patterns":[{"include":"source.json"}]},{"begin":"^\\\\s*(?=<\\\\S)","end":"^\\\\s*(\\\\#{3,}.*?)?\\\\s*$","endCaptures":{"0":{"name":"comment.line.sharp.http"}},"name":"http.request.body.xml","patterns":[{"include":"text.xml"}]},{"begin":"\\\\s*(?=(query|mutation))","end":"^\\\\s*(\\\\#{3,}.*?)?\\\\s*$","endCaptures":{"0":{"name":"comment.line.sharp.http"}},"name":"http.request.body.graphql","patterns":[{"include":"source.graphql"}]},{"begin":"\\\\s*(?=(query|mutation))","end":"^\\\\{\\\\s*$","name":"http.request.body.graphql","patterns":[{"include":"source.graphql"}]},{"include":"#metadata"},{"include":"#comments"},{"captures":{"1":{"name":"keyword.other.http"},"2":{"name":"variable.other.http"},"3":{"name":"string.other.http"}},"match":"^\\\\s*(@)([^\\\\s=]+)\\\\s*=\\\\s*(.*?)\\\\s*$","name":"http.filevariable"},{"captures":{"1":{"name":"keyword.operator.http"},"2":{"name":"variable.other.http"},"3":{"name":"string.other.http"}},"match":"^\\\\s*(\\\\?|&)([^=\\\\s]+)=(.*)$","name":"http.query"},{"captures":{"1":{"name":"entity.name.tag.http"},"2":{"name":"keyword.other.http"},"3":{"name":"string.other.http"}},"match":"^([\\\\w\\\\-]+)\\\\s*(:)\\\\s*([^/].*?)\\\\s*$","name":"http.headers"},{"include":"#request-line"},{"include":"#response-line"}],"repository":{"comments":{"patterns":[{"match":"^\\\\s*\\\\#{1,}.*$","name":"comment.line.sharp.http"},{"match":"^\\\\s*\\\\/{2,}.*$","name":"comment.line.double-slash.http"}]},"metadata":{"patterns":[{"captures":{"1":{"name":"entity.other.attribute-name"},"2":{"name":"punctuation.definition.block.tag.metadata"},"3":{"name":"entity.name.type.http"}},"match":"^\\\\s*\\\\#{1,}\\\\s+(?:((@)name)\\\\s+([^\\\\s\\\\.]+))$","name":"comment.line.sharp.http"},{"captures":{"1":{"name":"entity.other.attribute-name"},"2":{"name":"punctuation.definition.block.tag.metadata"},"3":{"name":"entity.name.type.http"}},"match":"^\\\\s*\\\\/{2,}\\\\s+(?:((@)name)\\\\s+([^\\\\s\\\\.]+))$","name":"comment.line.double-slash.http"},{"captures":{"1":{"name":"entity.other.attribute-name"},"2":{"name":"punctuation.definition.block.tag.metadata"}},"match":"^\\\\s*\\\\#{1,}\\\\s+((@)note)\\\\s*$","name":"comment.line.sharp.http"},{"captures":{"1":{"name":"entity.other.attribute-name"},"2":{"name":"punctuation.definition.block.tag.metadata"}},"match":"^\\\\s*\\\\/{2,}\\\\s+((@)note)\\\\s*$","name":"comment.line.double-slash.http"},{"captures":{"1":{"name":"entity.other.attribute-name"},"2":{"name":"punctuation.definition.block.tag.metadata"},"3":{"name":"variable.other.http"},"4":{"name":"string.other.http"}},"match":"^\\\\s*\\\\#{1,}\\\\s+(?:((@)prompt)\\\\s+([^\\\\s]+)(?:\\\\s+(.*))?\\\\s*)$","name":"comment.line.sharp.http"},{"captures":{"1":{"name":"entity.other.attribute-name"},"2":{"name":"punctuation.definition.block.tag.metadata"},"3":{"name":"variable.other.http"},"4":{"name":"string.other.http"}},"match":"^\\\\s*\\\\/{2,}\\\\s+(?:((@)prompt)\\\\s+([^\\\\s]+)(?:\\\\s+(.*))?\\\\s*)$","name":"comment.line.double-slash.http"}]},"protocol":{"patterns":[{"captures":{"1":{"name":"keyword.other.http"},"2":{"name":"constant.numeric.http"}},"match":"(HTTP)/(\\\\d+.\\\\d+)","name":"http.version"}]},"request-line":{"captures":{"1":{"name":"keyword.control.http"},"2":{"name":"const.language.http"},"3":{"patterns":[{"include":"#protocol"}]}},"match":"(?i)^(?:(get|post|put|delete|patch|head|options|connect|trace|lock|unlock|propfind|proppatch|copy|move|mkcol|mkcalendar|acl|search)\\\\s+)\\\\s*(.+?)(?:\\\\s+(HTTP\\\\/\\\\S+))?$","name":"http.requestline"},"response-line":{"captures":{"1":{"patterns":[{"include":"#protocol"}]},"2":{"name":"constant.numeric.http"},"3":{"name":"string.other.http"}},"match":"(?i)^\\\\s*(HTTP\\\\/\\\\S+)\\\\s([1-5]\\\\d\\\\d)\\\\s(.*)$","name":"http.responseLine"}},"scopeName":"source.http","embeddedLangs":["shellscript","json","xml","graphql"]}'));n.default=[...t.default,...i.default,...r.default,...l.default,p]},81497:function(e,n,a){a.r(n);const t=Object.freeze(JSON.parse('{"displayName":"JSON","name":"json","patterns":[{"include":"#value"}],"repository":{"array":{"begin":"\\\\[","beginCaptures":{"0":{"name":"punctuation.definition.array.begin.json"}},"end":"\\\\]","endCaptures":{"0":{"name":"punctuation.definition.array.end.json"}},"name":"meta.structure.array.json","patterns":[{"include":"#value"},{"match":",","name":"punctuation.separator.array.json"},{"match":"[^\\\\s\\\\]]","name":"invalid.illegal.expected-array-separator.json"}]},"comments":{"patterns":[{"begin":"/\\\\*\\\\*(?!/)","captures":{"0":{"name":"punctuation.definition.comment.json"}},"end":"\\\\*/","name":"comment.block.documentation.json"},{"begin":"/\\\\*","captures":{"0":{"name":"punctuation.definition.comment.json"}},"end":"\\\\*/","name":"comment.block.json"},{"captures":{"1":{"name":"punctuation.definition.comment.json"}},"match":"(//).*$\\\\n?","name":"comment.line.double-slash.js"}]},"constant":{"match":"\\\\b(?:true|false|null)\\\\b","name":"constant.language.json"},"number":{"match":"-?(?:0|[1-9]\\\\d*)(?:(?:\\\\.\\\\d+)?(?:[eE][+-]?\\\\d+)?)?","name":"constant.numeric.json"},"object":{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.definition.dictionary.begin.json"}},"end":"\\\\}","endCaptures":{"0":{"name":"punctuation.definition.dictionary.end.json"}},"name":"meta.structure.dictionary.json","patterns":[{"comment":"the JSON object key","include":"#objectkey"},{"include":"#comments"},{"begin":":","beginCaptures":{"0":{"name":"punctuation.separator.dictionary.key-value.json"}},"end":"(,)|(?=\\\\})","endCaptures":{"1":{"name":"punctuation.separator.dictionary.pair.json"}},"name":"meta.structure.dictionary.value.json","patterns":[{"comment":"the JSON object value","include":"#value"},{"match":"[^\\\\s,]","name":"invalid.illegal.expected-dictionary-separator.json"}]},{"match":"[^\\\\s}]","name":"invalid.illegal.expected-dictionary-separator.json"}]},"objectkey":{"begin":"\\"","beginCaptures":{"0":{"name":"punctuation.support.type.property-name.begin.json"}},"end":"\\"","endCaptures":{"0":{"name":"punctuation.support.type.property-name.end.json"}},"name":"string.json support.type.property-name.json","patterns":[{"include":"#stringcontent"}]},"string":{"begin":"\\"","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.json"}},"end":"\\"","endCaptures":{"0":{"name":"punctuation.definition.string.end.json"}},"name":"string.quoted.double.json","patterns":[{"include":"#stringcontent"}]},"stringcontent":{"patterns":[{"match":"\\\\\\\\(?:[\\"\\\\\\\\/bfnrt]|u[0-9a-fA-F]{4})","name":"constant.character.escape.json"},{"match":"\\\\\\\\.","name":"invalid.illegal.unrecognized-string-escape.json"}]},"value":{"patterns":[{"include":"#constant"},{"include":"#number"},{"include":"#string"},{"include":"#array"},{"include":"#object"},{"include":"#comments"}]}},"scopeName":"source.json"}'));n.default=[t]},94514:function(e,n,a){a.r(n);var t=a(70066);const i=Object.freeze(JSON.parse('{"displayName":"XML","name":"xml","patterns":[{"begin":"(<\\\\?)\\\\s*([-_a-zA-Z0-9]+)","captures":{"1":{"name":"punctuation.definition.tag.xml"},"2":{"name":"entity.name.tag.xml"}},"end":"(\\\\?>)","name":"meta.tag.preprocessor.xml","patterns":[{"match":" ([a-zA-Z-]+)","name":"entity.other.attribute-name.xml"},{"include":"#doublequotedString"},{"include":"#singlequotedString"}]},{"begin":"(<!)(DOCTYPE)\\\\s+([:a-zA-Z_][:a-zA-Z0-9_.-]*)","captures":{"1":{"name":"punctuation.definition.tag.xml"},"2":{"name":"keyword.other.doctype.xml"},"3":{"name":"variable.language.documentroot.xml"}},"end":"\\\\s*(>)","name":"meta.tag.sgml.doctype.xml","patterns":[{"include":"#internalSubset"}]},{"include":"#comments"},{"begin":"(<)((?:([-_a-zA-Z0-9]+)(:))?([-_a-zA-Z0-9:]+))(?=(\\\\s[^>]*)?></\\\\2>)","beginCaptures":{"1":{"name":"punctuation.definition.tag.xml"},"2":{"name":"entity.name.tag.xml"},"3":{"name":"entity.name.tag.namespace.xml"},"4":{"name":"punctuation.separator.namespace.xml"},"5":{"name":"entity.name.tag.localname.xml"}},"end":"(>)(</)((?:([-_a-zA-Z0-9]+)(:))?([-_a-zA-Z0-9:]+))(>)","endCaptures":{"1":{"name":"punctuation.definition.tag.xml"},"2":{"name":"punctuation.definition.tag.xml"},"3":{"name":"entity.name.tag.xml"},"4":{"name":"entity.name.tag.namespace.xml"},"5":{"name":"punctuation.separator.namespace.xml"},"6":{"name":"entity.name.tag.localname.xml"},"7":{"name":"punctuation.definition.tag.xml"}},"name":"meta.tag.no-content.xml","patterns":[{"include":"#tagStuff"}]},{"begin":"(</?)(?:([-\\\\w\\\\.]+)((:)))?([-\\\\w\\\\.:]+)","captures":{"1":{"name":"punctuation.definition.tag.xml"},"2":{"name":"entity.name.tag.namespace.xml"},"3":{"name":"entity.name.tag.xml"},"4":{"name":"punctuation.separator.namespace.xml"},"5":{"name":"entity.name.tag.localname.xml"}},"end":"(/?>)","name":"meta.tag.xml","patterns":[{"include":"#tagStuff"}]},{"include":"#entity"},{"include":"#bare-ampersand"},{"begin":"<%@","beginCaptures":{"0":{"name":"punctuation.section.embedded.begin.xml"}},"end":"%>","endCaptures":{"0":{"name":"punctuation.section.embedded.end.xml"}},"name":"source.java-props.embedded.xml","patterns":[{"match":"page|include|taglib","name":"keyword.other.page-props.xml"}]},{"begin":"<%[!=]?(?!--)","beginCaptures":{"0":{"name":"punctuation.section.embedded.begin.xml"}},"end":"(?!--)%>","endCaptures":{"0":{"name":"punctuation.section.embedded.end.xml"}},"name":"source.java.embedded.xml","patterns":[{"include":"source.java"}]},{"begin":"<!\\\\[CDATA\\\\[","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.xml"}},"end":"]]>","endCaptures":{"0":{"name":"punctuation.definition.string.end.xml"}},"name":"string.unquoted.cdata.xml"}],"repository":{"EntityDecl":{"begin":"(<!)(ENTITY)\\\\s+(%\\\\s+)?([:a-zA-Z_][:a-zA-Z0-9_.-]*)(\\\\s+(?:SYSTEM|PUBLIC)\\\\s+)?","captures":{"1":{"name":"punctuation.definition.tag.xml"},"2":{"name":"keyword.other.entity.xml"},"3":{"name":"punctuation.definition.entity.xml"},"4":{"name":"variable.language.entity.xml"},"5":{"name":"keyword.other.entitytype.xml"}},"end":"(>)","patterns":[{"include":"#doublequotedString"},{"include":"#singlequotedString"}]},"bare-ampersand":{"match":"&","name":"invalid.illegal.bad-ampersand.xml"},"comments":{"patterns":[{"begin":"<%--","captures":{"0":{"name":"punctuation.definition.comment.xml"},"end":"--%>","name":"comment.block.xml"}},{"begin":"\x3c!--","captures":{"0":{"name":"punctuation.definition.comment.xml"}},"end":"--\x3e","name":"comment.block.xml","patterns":[{"begin":"--(?!>)","captures":{"0":{"name":"invalid.illegal.bad-comments-or-CDATA.xml"}}}]}]},"doublequotedString":{"begin":"\\"","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.xml"}},"end":"\\"","endCaptures":{"0":{"name":"punctuation.definition.string.end.xml"}},"name":"string.quoted.double.xml","patterns":[{"include":"#entity"},{"include":"#bare-ampersand"}]},"entity":{"captures":{"1":{"name":"punctuation.definition.constant.xml"},"3":{"name":"punctuation.definition.constant.xml"}},"match":"(&)([:a-zA-Z_][:a-zA-Z0-9_.-]*|#\\\\d+|#x[0-9a-fA-F]+)(;)","name":"constant.character.entity.xml"},"internalSubset":{"begin":"(\\\\[)","captures":{"1":{"name":"punctuation.definition.constant.xml"}},"end":"(\\\\])","name":"meta.internalsubset.xml","patterns":[{"include":"#EntityDecl"},{"include":"#parameterEntity"},{"include":"#comments"}]},"parameterEntity":{"captures":{"1":{"name":"punctuation.definition.constant.xml"},"3":{"name":"punctuation.definition.constant.xml"}},"match":"(%)([:a-zA-Z_][:a-zA-Z0-9_.-]*)(;)","name":"constant.character.parameter-entity.xml"},"singlequotedString":{"begin":"\'","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.xml"}},"end":"\'","endCaptures":{"0":{"name":"punctuation.definition.string.end.xml"}},"name":"string.quoted.single.xml","patterns":[{"include":"#entity"},{"include":"#bare-ampersand"}]},"tagStuff":{"patterns":[{"captures":{"1":{"name":"entity.other.attribute-name.namespace.xml"},"2":{"name":"entity.other.attribute-name.xml"},"3":{"name":"punctuation.separator.namespace.xml"},"4":{"name":"entity.other.attribute-name.localname.xml"}},"match":"(?:^|\\\\s+)(?:([-\\\\w.]+)((:)))?([-\\\\w.:]+)\\\\s*="},{"include":"#doublequotedString"},{"include":"#singlequotedString"}]}},"scopeName":"text.xml","embeddedLangs":["java"]}'));n.default=[...t.default,i]}}]);